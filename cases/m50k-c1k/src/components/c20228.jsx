import React from 'react';
const LABEL_20228 = 'component_20228';
export function Component20228({ value = 20228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20228, 'data-value': derived.doubled }, children);
}
export default Component20228;
