import React from 'react';
const LABEL_31493 = 'component_31493';
export function Component31493({ value = 31493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31493, 'data-value': derived.doubled }, children);
}
export default Component31493;
