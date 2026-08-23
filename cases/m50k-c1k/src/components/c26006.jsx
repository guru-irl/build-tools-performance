import React from 'react';
const LABEL_26006 = 'component_26006';
export function Component26006({ value = 26006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26006, 'data-value': derived.doubled }, children);
}
export default Component26006;
