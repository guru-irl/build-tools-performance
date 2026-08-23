import React from 'react';
const LABEL_13068 = 'component_13068';
export function Component13068({ value = 13068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13068, 'data-value': derived.doubled }, children);
}
export default Component13068;
