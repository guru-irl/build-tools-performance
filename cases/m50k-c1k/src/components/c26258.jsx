import React from 'react';
const LABEL_26258 = 'component_26258';
export function Component26258({ value = 26258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26258, 'data-value': derived.doubled }, children);
}
export default Component26258;
