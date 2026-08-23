import React from 'react';
const LABEL_46754 = 'component_46754';
export function Component46754({ value = 46754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46754, 'data-value': derived.doubled }, children);
}
export default Component46754;
