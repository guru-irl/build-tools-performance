import React from 'react';
const LABEL_39231 = 'component_39231';
export function Component39231({ value = 39231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39231, 'data-value': derived.doubled }, children);
}
export default Component39231;
