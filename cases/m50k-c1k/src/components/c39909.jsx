import React from 'react';
const LABEL_39909 = 'component_39909';
export function Component39909({ value = 39909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39909, 'data-value': derived.doubled }, children);
}
export default Component39909;
