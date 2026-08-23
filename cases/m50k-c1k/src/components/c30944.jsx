import React from 'react';
const LABEL_30944 = 'component_30944';
export function Component30944({ value = 30944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30944, 'data-value': derived.doubled }, children);
}
export default Component30944;
