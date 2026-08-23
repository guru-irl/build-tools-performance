import React from 'react';
const LABEL_4222 = 'component_4222';
export function Component4222({ value = 4222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4222, 'data-value': derived.doubled }, children);
}
export default Component4222;
