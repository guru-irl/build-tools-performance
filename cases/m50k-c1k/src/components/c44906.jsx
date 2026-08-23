import React from 'react';
const LABEL_44906 = 'component_44906';
export function Component44906({ value = 44906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44906, 'data-value': derived.doubled }, children);
}
export default Component44906;
