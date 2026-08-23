import React from 'react';
const LABEL_36944 = 'component_36944';
export function Component36944({ value = 36944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36944, 'data-value': derived.doubled }, children);
}
export default Component36944;
