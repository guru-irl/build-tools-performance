import React from 'react';
const LABEL_43739 = 'component_43739';
export function Component43739({ value = 43739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43739, 'data-value': derived.doubled }, children);
}
export default Component43739;
