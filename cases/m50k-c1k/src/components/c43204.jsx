import React from 'react';
const LABEL_43204 = 'component_43204';
export function Component43204({ value = 43204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43204, 'data-value': derived.doubled }, children);
}
export default Component43204;
