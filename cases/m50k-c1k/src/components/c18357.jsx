import React from 'react';
const LABEL_18357 = 'component_18357';
export function Component18357({ value = 18357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18357, 'data-value': derived.doubled }, children);
}
export default Component18357;
