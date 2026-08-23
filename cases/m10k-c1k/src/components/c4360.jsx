import React from 'react';
const LABEL_4360 = 'component_4360';
export function Component4360({ value = 4360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4360, 'data-value': derived.doubled }, children);
}
export default Component4360;
