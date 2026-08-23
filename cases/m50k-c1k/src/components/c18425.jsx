import React from 'react';
const LABEL_18425 = 'component_18425';
export function Component18425({ value = 18425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18425, 'data-value': derived.doubled }, children);
}
export default Component18425;
