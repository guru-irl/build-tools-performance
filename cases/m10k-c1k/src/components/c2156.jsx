import React from 'react';
const LABEL_2156 = 'component_2156';
export function Component2156({ value = 2156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2156, 'data-value': derived.doubled }, children);
}
export default Component2156;
