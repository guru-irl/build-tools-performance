import React from 'react';
const LABEL_22066 = 'component_22066';
export function Component22066({ value = 22066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22066, 'data-value': derived.doubled }, children);
}
export default Component22066;
