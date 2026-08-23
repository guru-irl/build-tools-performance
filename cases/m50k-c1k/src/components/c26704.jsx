import React from 'react';
const LABEL_26704 = 'component_26704';
export function Component26704({ value = 26704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26704, 'data-value': derived.doubled }, children);
}
export default Component26704;
