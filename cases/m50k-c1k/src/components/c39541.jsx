import React from 'react';
const LABEL_39541 = 'component_39541';
export function Component39541({ value = 39541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39541, 'data-value': derived.doubled }, children);
}
export default Component39541;
