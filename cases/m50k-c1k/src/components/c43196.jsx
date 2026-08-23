import React from 'react';
const LABEL_43196 = 'component_43196';
export function Component43196({ value = 43196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43196, 'data-value': derived.doubled }, children);
}
export default Component43196;
