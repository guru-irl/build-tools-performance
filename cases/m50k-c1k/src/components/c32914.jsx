import React from 'react';
const LABEL_32914 = 'component_32914';
export function Component32914({ value = 32914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32914, 'data-value': derived.doubled }, children);
}
export default Component32914;
