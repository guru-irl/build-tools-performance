import React from 'react';
const LABEL_8292 = 'component_8292';
export function Component8292({ value = 8292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8292, 'data-value': derived.doubled }, children);
}
export default Component8292;
