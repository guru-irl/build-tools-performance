import React from 'react';
const LABEL_4236 = 'component_4236';
export function Component4236({ value = 4236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4236, 'data-value': derived.doubled }, children);
}
export default Component4236;
