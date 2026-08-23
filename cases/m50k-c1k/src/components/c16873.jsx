import React from 'react';
const LABEL_16873 = 'component_16873';
export function Component16873({ value = 16873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16873, 'data-value': derived.doubled }, children);
}
export default Component16873;
