import React from 'react';
const LABEL_6254 = 'component_6254';
export function Component6254({ value = 6254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6254, 'data-value': derived.doubled }, children);
}
export default Component6254;
