import React from 'react';
const LABEL_43327 = 'component_43327';
export function Component43327({ value = 43327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43327, 'data-value': derived.doubled }, children);
}
export default Component43327;
