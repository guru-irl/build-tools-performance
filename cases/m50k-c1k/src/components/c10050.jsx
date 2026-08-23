import React from 'react';
const LABEL_10050 = 'component_10050';
export function Component10050({ value = 10050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10050, 'data-value': derived.doubled }, children);
}
export default Component10050;
