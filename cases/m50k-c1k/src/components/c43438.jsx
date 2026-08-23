import React from 'react';
const LABEL_43438 = 'component_43438';
export function Component43438({ value = 43438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43438, 'data-value': derived.doubled }, children);
}
export default Component43438;
