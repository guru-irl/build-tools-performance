import React from 'react';
const LABEL_44149 = 'component_44149';
export function Component44149({ value = 44149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44149, 'data-value': derived.doubled }, children);
}
export default Component44149;
