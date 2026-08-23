import React from 'react';
const LABEL_26451 = 'component_26451';
export function Component26451({ value = 26451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26451, 'data-value': derived.doubled }, children);
}
export default Component26451;
