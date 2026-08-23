import React from 'react';
const LABEL_28360 = 'component_28360';
export function Component28360({ value = 28360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28360, 'data-value': derived.doubled }, children);
}
export default Component28360;
