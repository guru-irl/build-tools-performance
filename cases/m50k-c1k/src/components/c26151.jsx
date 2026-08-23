import React from 'react';
const LABEL_26151 = 'component_26151';
export function Component26151({ value = 26151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26151, 'data-value': derived.doubled }, children);
}
export default Component26151;
