import React from 'react';
const LABEL_4943 = 'component_4943';
export function Component4943({ value = 4943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4943, 'data-value': derived.doubled }, children);
}
export default Component4943;
