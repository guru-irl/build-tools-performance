import React from 'react';
const LABEL_43325 = 'component_43325';
export function Component43325({ value = 43325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43325, 'data-value': derived.doubled }, children);
}
export default Component43325;
