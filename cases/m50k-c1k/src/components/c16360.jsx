import React from 'react';
const LABEL_16360 = 'component_16360';
export function Component16360({ value = 16360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16360, 'data-value': derived.doubled }, children);
}
export default Component16360;
