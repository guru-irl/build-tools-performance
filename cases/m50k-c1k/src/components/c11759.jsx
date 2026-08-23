import React from 'react';
const LABEL_11759 = 'component_11759';
export function Component11759({ value = 11759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11759, 'data-value': derived.doubled }, children);
}
export default Component11759;
