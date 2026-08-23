import React from 'react';
const LABEL_19232 = 'component_19232';
export function Component19232({ value = 19232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19232, 'data-value': derived.doubled }, children);
}
export default Component19232;
