import React from 'react';
const LABEL_43872 = 'component_43872';
export function Component43872({ value = 43872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43872, 'data-value': derived.doubled }, children);
}
export default Component43872;
