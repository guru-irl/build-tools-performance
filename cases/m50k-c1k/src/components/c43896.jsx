import React from 'react';
const LABEL_43896 = 'component_43896';
export function Component43896({ value = 43896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43896, 'data-value': derived.doubled }, children);
}
export default Component43896;
