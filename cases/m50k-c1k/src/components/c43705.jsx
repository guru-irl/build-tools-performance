import React from 'react';
const LABEL_43705 = 'component_43705';
export function Component43705({ value = 43705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43705, 'data-value': derived.doubled }, children);
}
export default Component43705;
