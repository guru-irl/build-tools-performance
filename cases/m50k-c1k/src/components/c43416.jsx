import React from 'react';
const LABEL_43416 = 'component_43416';
export function Component43416({ value = 43416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43416, 'data-value': derived.doubled }, children);
}
export default Component43416;
