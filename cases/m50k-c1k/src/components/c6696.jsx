import React from 'react';
const LABEL_6696 = 'component_6696';
export function Component6696({ value = 6696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6696, 'data-value': derived.doubled }, children);
}
export default Component6696;
