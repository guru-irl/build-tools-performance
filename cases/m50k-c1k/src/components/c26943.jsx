import React from 'react';
const LABEL_26943 = 'component_26943';
export function Component26943({ value = 26943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26943, 'data-value': derived.doubled }, children);
}
export default Component26943;
