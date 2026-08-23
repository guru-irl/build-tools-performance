import React from 'react';
const LABEL_18002 = 'component_18002';
export function Component18002({ value = 18002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18002, 'data-value': derived.doubled }, children);
}
export default Component18002;
