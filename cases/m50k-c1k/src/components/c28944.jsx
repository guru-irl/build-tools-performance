import React from 'react';
const LABEL_28944 = 'component_28944';
export function Component28944({ value = 28944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28944, 'data-value': derived.doubled }, children);
}
export default Component28944;
