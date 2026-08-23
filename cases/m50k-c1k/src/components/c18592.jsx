import React from 'react';
const LABEL_18592 = 'component_18592';
export function Component18592({ value = 18592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18592, 'data-value': derived.doubled }, children);
}
export default Component18592;
