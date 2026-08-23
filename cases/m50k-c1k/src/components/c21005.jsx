import React from 'react';
const LABEL_21005 = 'component_21005';
export function Component21005({ value = 21005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21005, 'data-value': derived.doubled }, children);
}
export default Component21005;
