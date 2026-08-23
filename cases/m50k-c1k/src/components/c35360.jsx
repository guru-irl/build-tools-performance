import React from 'react';
const LABEL_35360 = 'component_35360';
export function Component35360({ value = 35360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35360, 'data-value': derived.doubled }, children);
}
export default Component35360;
