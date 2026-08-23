import React from 'react';
const LABEL_13612 = 'component_13612';
export function Component13612({ value = 13612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13612, 'data-value': derived.doubled }, children);
}
export default Component13612;
