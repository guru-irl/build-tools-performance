import React from 'react';
const LABEL_39027 = 'component_39027';
export function Component39027({ value = 39027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39027, 'data-value': derived.doubled }, children);
}
export default Component39027;
