import React from 'react';
const LABEL_5360 = 'component_5360';
export function Component5360({ value = 5360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5360, 'data-value': derived.doubled }, children);
}
export default Component5360;
