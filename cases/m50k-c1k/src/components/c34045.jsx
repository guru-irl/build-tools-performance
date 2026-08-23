import React from 'react';
const LABEL_34045 = 'component_34045';
export function Component34045({ value = 34045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34045, 'data-value': derived.doubled }, children);
}
export default Component34045;
