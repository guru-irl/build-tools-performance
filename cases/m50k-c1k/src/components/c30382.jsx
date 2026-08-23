import React from 'react';
const LABEL_30382 = 'component_30382';
export function Component30382({ value = 30382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30382, 'data-value': derived.doubled }, children);
}
export default Component30382;
