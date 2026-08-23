import React from 'react';
const LABEL_6868 = 'component_6868';
export function Component6868({ value = 6868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6868, 'data-value': derived.doubled }, children);
}
export default Component6868;
