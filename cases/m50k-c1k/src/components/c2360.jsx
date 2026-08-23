import React from 'react';
const LABEL_2360 = 'component_2360';
export function Component2360({ value = 2360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2360, 'data-value': derived.doubled }, children);
}
export default Component2360;
