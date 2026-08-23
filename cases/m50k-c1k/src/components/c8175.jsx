import React from 'react';
const LABEL_8175 = 'component_8175';
export function Component8175({ value = 8175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8175, 'data-value': derived.doubled }, children);
}
export default Component8175;
