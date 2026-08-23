import React from 'react';
const LABEL_6943 = 'component_6943';
export function Component6943({ value = 6943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6943, 'data-value': derived.doubled }, children);
}
export default Component6943;
