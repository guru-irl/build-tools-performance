import React from 'react';
const LABEL_18912 = 'component_18912';
export function Component18912({ value = 18912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18912, 'data-value': derived.doubled }, children);
}
export default Component18912;
