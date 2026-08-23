import React from 'react';
const LABEL_20360 = 'component_20360';
export function Component20360({ value = 20360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20360, 'data-value': derived.doubled }, children);
}
export default Component20360;
