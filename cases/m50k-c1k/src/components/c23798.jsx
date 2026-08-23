import React from 'react';
const LABEL_23798 = 'component_23798';
export function Component23798({ value = 23798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23798, 'data-value': derived.doubled }, children);
}
export default Component23798;
