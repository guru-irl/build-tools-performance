import React from 'react';
const LABEL_6489 = 'component_6489';
export function Component6489({ value = 6489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6489, 'data-value': derived.doubled }, children);
}
export default Component6489;
