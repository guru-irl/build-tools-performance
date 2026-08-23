import React from 'react';
const LABEL_18255 = 'component_18255';
export function Component18255({ value = 18255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18255, 'data-value': derived.doubled }, children);
}
export default Component18255;
