import React from 'react';
const LABEL_36292 = 'component_36292';
export function Component36292({ value = 36292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36292, 'data-value': derived.doubled }, children);
}
export default Component36292;
