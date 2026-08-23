import React from 'react';
const LABEL_26167 = 'component_26167';
export function Component26167({ value = 26167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26167, 'data-value': derived.doubled }, children);
}
export default Component26167;
