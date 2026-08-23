import React from 'react';
const LABEL_31931 = 'component_31931';
export function Component31931({ value = 31931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31931, 'data-value': derived.doubled }, children);
}
export default Component31931;
