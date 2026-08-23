import React from 'react';
const LABEL_10360 = 'component_10360';
export function Component10360({ value = 10360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10360, 'data-value': derived.doubled }, children);
}
export default Component10360;
