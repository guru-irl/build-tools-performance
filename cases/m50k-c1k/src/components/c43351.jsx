import React from 'react';
const LABEL_43351 = 'component_43351';
export function Component43351({ value = 43351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43351, 'data-value': derived.doubled }, children);
}
export default Component43351;
