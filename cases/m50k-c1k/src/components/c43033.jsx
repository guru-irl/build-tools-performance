import React from 'react';
const LABEL_43033 = 'component_43033';
export function Component43033({ value = 43033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43033, 'data-value': derived.doubled }, children);
}
export default Component43033;
