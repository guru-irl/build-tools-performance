import React from 'react';
const LABEL_24927 = 'component_24927';
export function Component24927({ value = 24927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24927, 'data-value': derived.doubled }, children);
}
export default Component24927;
