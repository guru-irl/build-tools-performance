import React from 'react';
const LABEL_46577 = 'component_46577';
export function Component46577({ value = 46577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46577, 'data-value': derived.doubled }, children);
}
export default Component46577;
