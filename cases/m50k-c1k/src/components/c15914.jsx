import React from 'react';
const LABEL_15914 = 'component_15914';
export function Component15914({ value = 15914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15914, 'data-value': derived.doubled }, children);
}
export default Component15914;
