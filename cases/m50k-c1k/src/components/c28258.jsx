import React from 'react';
const LABEL_28258 = 'component_28258';
export function Component28258({ value = 28258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28258, 'data-value': derived.doubled }, children);
}
export default Component28258;
