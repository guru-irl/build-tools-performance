import React from 'react';
const LABEL_6048 = 'component_6048';
export function Component6048({ value = 6048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6048, 'data-value': derived.doubled }, children);
}
export default Component6048;
