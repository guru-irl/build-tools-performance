import React from 'react';
const LABEL_40360 = 'component_40360';
export function Component40360({ value = 40360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40360, 'data-value': derived.doubled }, children);
}
export default Component40360;
