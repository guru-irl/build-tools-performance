import React from 'react';
const LABEL_13308 = 'component_13308';
export function Component13308({ value = 13308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13308, 'data-value': derived.doubled }, children);
}
export default Component13308;
