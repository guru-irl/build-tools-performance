import React from 'react';
const LABEL_26149 = 'component_26149';
export function Component26149({ value = 26149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26149, 'data-value': derived.doubled }, children);
}
export default Component26149;
