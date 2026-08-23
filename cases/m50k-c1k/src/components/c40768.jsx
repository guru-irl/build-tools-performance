import React from 'react';
const LABEL_40768 = 'component_40768';
export function Component40768({ value = 40768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40768, 'data-value': derived.doubled }, children);
}
export default Component40768;
