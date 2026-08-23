import React from 'react';
const LABEL_36360 = 'component_36360';
export function Component36360({ value = 36360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36360, 'data-value': derived.doubled }, children);
}
export default Component36360;
