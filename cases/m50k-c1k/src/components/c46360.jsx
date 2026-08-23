import React from 'react';
const LABEL_46360 = 'component_46360';
export function Component46360({ value = 46360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46360, 'data-value': derived.doubled }, children);
}
export default Component46360;
