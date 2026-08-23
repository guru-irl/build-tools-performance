import React from 'react';
const LABEL_24541 = 'component_24541';
export function Component24541({ value = 24541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24541, 'data-value': derived.doubled }, children);
}
export default Component24541;
