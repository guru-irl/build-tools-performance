import React from 'react';
const LABEL_43793 = 'component_43793';
export function Component43793({ value = 43793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43793, 'data-value': derived.doubled }, children);
}
export default Component43793;
