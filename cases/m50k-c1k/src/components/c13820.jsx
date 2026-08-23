import React from 'react';
const LABEL_13820 = 'component_13820';
export function Component13820({ value = 13820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13820, 'data-value': derived.doubled }, children);
}
export default Component13820;
