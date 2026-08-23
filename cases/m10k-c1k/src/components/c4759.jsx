import React from 'react';
const LABEL_4759 = 'component_4759';
export function Component4759({ value = 4759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4759, 'data-value': derived.doubled }, children);
}
export default Component4759;
