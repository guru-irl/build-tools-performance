import React from 'react';
const LABEL_46518 = 'component_46518';
export function Component46518({ value = 46518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46518, 'data-value': derived.doubled }, children);
}
export default Component46518;
