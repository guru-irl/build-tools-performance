import React from 'react';
const LABEL_26873 = 'component_26873';
export function Component26873({ value = 26873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26873, 'data-value': derived.doubled }, children);
}
export default Component26873;
