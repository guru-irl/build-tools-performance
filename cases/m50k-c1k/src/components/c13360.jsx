import React from 'react';
const LABEL_13360 = 'component_13360';
export function Component13360({ value = 13360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13360, 'data-value': derived.doubled }, children);
}
export default Component13360;
