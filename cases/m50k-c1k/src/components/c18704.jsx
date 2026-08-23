import React from 'react';
const LABEL_18704 = 'component_18704';
export function Component18704({ value = 18704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18704, 'data-value': derived.doubled }, children);
}
export default Component18704;
