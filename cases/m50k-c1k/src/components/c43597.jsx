import React from 'react';
const LABEL_43597 = 'component_43597';
export function Component43597({ value = 43597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43597, 'data-value': derived.doubled }, children);
}
export default Component43597;
