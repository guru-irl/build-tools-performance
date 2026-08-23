import React from 'react';
const LABEL_43941 = 'component_43941';
export function Component43941({ value = 43941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43941, 'data-value': derived.doubled }, children);
}
export default Component43941;
