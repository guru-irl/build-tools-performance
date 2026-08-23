import React from 'react';
const LABEL_42720 = 'component_42720';
export function Component42720({ value = 42720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42720, 'data-value': derived.doubled }, children);
}
export default Component42720;
