import React from 'react';
const LABEL_4696 = 'component_4696';
export function Component4696({ value = 4696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4696, 'data-value': derived.doubled }, children);
}
export default Component4696;
