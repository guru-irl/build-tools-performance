import React from 'react';
const LABEL_43027 = 'component_43027';
export function Component43027({ value = 43027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43027, 'data-value': derived.doubled }, children);
}
export default Component43027;
