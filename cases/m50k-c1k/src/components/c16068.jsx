import React from 'react';
const LABEL_16068 = 'component_16068';
export function Component16068({ value = 16068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16068, 'data-value': derived.doubled }, children);
}
export default Component16068;
