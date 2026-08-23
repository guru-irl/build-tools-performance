import React from 'react';
const LABEL_16305 = 'component_16305';
export function Component16305({ value = 16305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16305, 'data-value': derived.doubled }, children);
}
export default Component16305;
