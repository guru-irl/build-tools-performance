import React from 'react';
const LABEL_43360 = 'component_43360';
export function Component43360({ value = 43360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43360, 'data-value': derived.doubled }, children);
}
export default Component43360;
