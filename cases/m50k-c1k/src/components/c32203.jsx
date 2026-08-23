import React from 'react';
const LABEL_32203 = 'component_32203';
export function Component32203({ value = 32203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32203, 'data-value': derived.doubled }, children);
}
export default Component32203;
