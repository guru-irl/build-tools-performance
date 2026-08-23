import React from 'react';
const LABEL_10914 = 'component_10914';
export function Component10914({ value = 10914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10914, 'data-value': derived.doubled }, children);
}
export default Component10914;
