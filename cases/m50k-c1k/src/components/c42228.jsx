import React from 'react';
const LABEL_42228 = 'component_42228';
export function Component42228({ value = 42228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42228, 'data-value': derived.doubled }, children);
}
export default Component42228;
