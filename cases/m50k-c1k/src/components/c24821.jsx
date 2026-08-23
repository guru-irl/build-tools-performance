import React from 'react';
const LABEL_24821 = 'component_24821';
export function Component24821({ value = 24821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24821, 'data-value': derived.doubled }, children);
}
export default Component24821;
