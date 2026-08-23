import React from 'react';
const LABEL_44873 = 'component_44873';
export function Component44873({ value = 44873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44873, 'data-value': derived.doubled }, children);
}
export default Component44873;
