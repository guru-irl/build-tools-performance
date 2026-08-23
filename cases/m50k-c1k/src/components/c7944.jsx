import React from 'react';
const LABEL_7944 = 'component_7944';
export function Component7944({ value = 7944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7944, 'data-value': derived.doubled }, children);
}
export default Component7944;
