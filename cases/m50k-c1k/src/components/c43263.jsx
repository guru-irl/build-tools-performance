import React from 'react';
const LABEL_43263 = 'component_43263';
export function Component43263({ value = 43263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43263, 'data-value': derived.doubled }, children);
}
export default Component43263;
