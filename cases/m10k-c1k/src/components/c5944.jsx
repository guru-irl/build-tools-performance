import React from 'react';
const LABEL_5944 = 'component_5944';
export function Component5944({ value = 5944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5944, 'data-value': derived.doubled }, children);
}
export default Component5944;
