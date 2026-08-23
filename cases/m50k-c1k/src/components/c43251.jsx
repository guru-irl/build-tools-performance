import React from 'react';
const LABEL_43251 = 'component_43251';
export function Component43251({ value = 43251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43251, 'data-value': derived.doubled }, children);
}
export default Component43251;
