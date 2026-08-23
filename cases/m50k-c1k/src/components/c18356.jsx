import React from 'react';
const LABEL_18356 = 'component_18356';
export function Component18356({ value = 18356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18356, 'data-value': derived.doubled }, children);
}
export default Component18356;
