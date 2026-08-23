import React from 'react';
const LABEL_944 = 'component_944';
export function Component944({ value = 944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_944, 'data-value': derived.doubled }, children);
}
export default Component944;
