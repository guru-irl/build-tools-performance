import React from 'react';
const LABEL_7360 = 'component_7360';
export function Component7360({ value = 7360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7360, 'data-value': derived.doubled }, children);
}
export default Component7360;
