import React from 'react';
const LABEL_29944 = 'component_29944';
export function Component29944({ value = 29944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29944, 'data-value': derived.doubled }, children);
}
export default Component29944;
