import React from 'react';
const LABEL_4117 = 'component_4117';
export function Component4117({ value = 4117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4117, 'data-value': derived.doubled }, children);
}
export default Component4117;
