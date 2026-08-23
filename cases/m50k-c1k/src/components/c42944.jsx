import React from 'react';
const LABEL_42944 = 'component_42944';
export function Component42944({ value = 42944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42944, 'data-value': derived.doubled }, children);
}
export default Component42944;
