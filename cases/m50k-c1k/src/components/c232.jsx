import React from 'react';
const LABEL_232 = 'component_232';
export function Component232({ value = 232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_232, 'data-value': derived.doubled }, children);
}
export default Component232;
