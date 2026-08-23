import React from 'react';
const LABEL_40532 = 'component_40532';
export function Component40532({ value = 40532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40532, 'data-value': derived.doubled }, children);
}
export default Component40532;
