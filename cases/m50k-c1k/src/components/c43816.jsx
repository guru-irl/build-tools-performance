import React from 'react';
const LABEL_43816 = 'component_43816';
export function Component43816({ value = 43816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43816, 'data-value': derived.doubled }, children);
}
export default Component43816;
