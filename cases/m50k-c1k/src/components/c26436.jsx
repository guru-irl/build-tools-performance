import React from 'react';
const LABEL_26436 = 'component_26436';
export function Component26436({ value = 26436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26436, 'data-value': derived.doubled }, children);
}
export default Component26436;
