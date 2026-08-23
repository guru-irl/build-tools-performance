import React from 'react';
const LABEL_18696 = 'component_18696';
export function Component18696({ value = 18696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18696, 'data-value': derived.doubled }, children);
}
export default Component18696;
