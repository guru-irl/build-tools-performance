import React from 'react';
const LABEL_42496 = 'component_42496';
export function Component42496({ value = 42496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42496, 'data-value': derived.doubled }, children);
}
export default Component42496;
