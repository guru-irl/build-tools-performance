import React from 'react';
const LABEL_46570 = 'component_46570';
export function Component46570({ value = 46570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46570, 'data-value': derived.doubled }, children);
}
export default Component46570;
