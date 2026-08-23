import React from 'react';
const LABEL_23351 = 'component_23351';
export function Component23351({ value = 23351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23351, 'data-value': derived.doubled }, children);
}
export default Component23351;
