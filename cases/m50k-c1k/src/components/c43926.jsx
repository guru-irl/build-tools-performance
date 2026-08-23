import React from 'react';
const LABEL_43926 = 'component_43926';
export function Component43926({ value = 43926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43926, 'data-value': derived.doubled }, children);
}
export default Component43926;
