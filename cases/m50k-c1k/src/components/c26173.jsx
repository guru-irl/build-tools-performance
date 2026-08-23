import React from 'react';
const LABEL_26173 = 'component_26173';
export function Component26173({ value = 26173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26173, 'data-value': derived.doubled }, children);
}
export default Component26173;
