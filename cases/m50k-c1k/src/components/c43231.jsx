import React from 'react';
const LABEL_43231 = 'component_43231';
export function Component43231({ value = 43231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43231, 'data-value': derived.doubled }, children);
}
export default Component43231;
