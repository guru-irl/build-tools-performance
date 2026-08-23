import React from 'react';
const LABEL_36541 = 'component_36541';
export function Component36541({ value = 36541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36541, 'data-value': derived.doubled }, children);
}
export default Component36541;
