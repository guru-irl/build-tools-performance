import React from 'react';
const LABEL_11558 = 'component_11558';
export function Component11558({ value = 11558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11558, 'data-value': derived.doubled }, children);
}
export default Component11558;
