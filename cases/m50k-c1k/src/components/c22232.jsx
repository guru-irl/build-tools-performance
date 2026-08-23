import React from 'react';
const LABEL_22232 = 'component_22232';
export function Component22232({ value = 22232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22232, 'data-value': derived.doubled }, children);
}
export default Component22232;
