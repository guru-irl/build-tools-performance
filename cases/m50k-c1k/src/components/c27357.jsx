import React from 'react';
const LABEL_27357 = 'component_27357';
export function Component27357({ value = 27357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27357, 'data-value': derived.doubled }, children);
}
export default Component27357;
