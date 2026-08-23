import React from 'react';
const LABEL_42292 = 'component_42292';
export function Component42292({ value = 42292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42292, 'data-value': derived.doubled }, children);
}
export default Component42292;
