import React from 'react';
const LABEL_18877 = 'component_18877';
export function Component18877({ value = 18877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18877, 'data-value': derived.doubled }, children);
}
export default Component18877;
