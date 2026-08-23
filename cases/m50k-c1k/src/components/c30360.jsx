import React from 'react';
const LABEL_30360 = 'component_30360';
export function Component30360({ value = 30360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30360, 'data-value': derived.doubled }, children);
}
export default Component30360;
