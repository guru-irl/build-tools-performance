import React from 'react';
const LABEL_4050 = 'component_4050';
export function Component4050({ value = 4050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4050, 'data-value': derived.doubled }, children);
}
export default Component4050;
