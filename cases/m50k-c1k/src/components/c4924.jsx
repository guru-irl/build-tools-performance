import React from 'react';
const LABEL_4924 = 'component_4924';
export function Component4924({ value = 4924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4924, 'data-value': derived.doubled }, children);
}
export default Component4924;
