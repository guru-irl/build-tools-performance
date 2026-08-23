import React from 'react';
const LABEL_43671 = 'component_43671';
export function Component43671({ value = 43671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43671, 'data-value': derived.doubled }, children);
}
export default Component43671;
