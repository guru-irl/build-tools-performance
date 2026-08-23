import React from 'react';
const LABEL_19438 = 'component_19438';
export function Component19438({ value = 19438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19438, 'data-value': derived.doubled }, children);
}
export default Component19438;
