import React from 'react';
const LABEL_45489 = 'component_45489';
export function Component45489({ value = 45489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45489, 'data-value': derived.doubled }, children);
}
export default Component45489;
