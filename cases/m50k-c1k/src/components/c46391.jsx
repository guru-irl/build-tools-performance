import React from 'react';
const LABEL_46391 = 'component_46391';
export function Component46391({ value = 46391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46391, 'data-value': derived.doubled }, children);
}
export default Component46391;
