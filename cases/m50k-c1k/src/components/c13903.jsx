import React from 'react';
const LABEL_13903 = 'component_13903';
export function Component13903({ value = 13903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13903, 'data-value': derived.doubled }, children);
}
export default Component13903;
