import React from 'react';
const LABEL_18240 = 'component_18240';
export function Component18240({ value = 18240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18240, 'data-value': derived.doubled }, children);
}
export default Component18240;
