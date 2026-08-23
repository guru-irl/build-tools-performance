import React from 'react';
const LABEL_42759 = 'component_42759';
export function Component42759({ value = 42759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42759, 'data-value': derived.doubled }, children);
}
export default Component42759;
