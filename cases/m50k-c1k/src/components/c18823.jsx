import React from 'react';
const LABEL_18823 = 'component_18823';
export function Component18823({ value = 18823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18823, 'data-value': derived.doubled }, children);
}
export default Component18823;
