import React from 'react';
const LABEL_18802 = 'component_18802';
export function Component18802({ value = 18802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18802, 'data-value': derived.doubled }, children);
}
export default Component18802;
