import React from 'react';
const LABEL_26212 = 'component_26212';
export function Component26212({ value = 26212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26212, 'data-value': derived.doubled }, children);
}
export default Component26212;
