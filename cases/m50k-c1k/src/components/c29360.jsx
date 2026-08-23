import React from 'react';
const LABEL_29360 = 'component_29360';
export function Component29360({ value = 29360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29360, 'data-value': derived.doubled }, children);
}
export default Component29360;
