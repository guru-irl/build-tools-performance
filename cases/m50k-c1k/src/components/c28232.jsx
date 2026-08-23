import React from 'react';
const LABEL_28232 = 'component_28232';
export function Component28232({ value = 28232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28232, 'data-value': derived.doubled }, children);
}
export default Component28232;
