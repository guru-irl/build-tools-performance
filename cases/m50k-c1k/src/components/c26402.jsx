import React from 'react';
const LABEL_26402 = 'component_26402';
export function Component26402({ value = 26402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26402, 'data-value': derived.doubled }, children);
}
export default Component26402;
