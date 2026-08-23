import React from 'react';
const LABEL_19360 = 'component_19360';
export function Component19360({ value = 19360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19360, 'data-value': derived.doubled }, children);
}
export default Component19360;
