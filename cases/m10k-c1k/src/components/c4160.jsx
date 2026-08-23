import React from 'react';
const LABEL_4160 = 'component_4160';
export function Component4160({ value = 4160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4160, 'data-value': derived.doubled }, children);
}
export default Component4160;
