import React from 'react';
const LABEL_46759 = 'component_46759';
export function Component46759({ value = 46759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46759, 'data-value': derived.doubled }, children);
}
export default Component46759;
