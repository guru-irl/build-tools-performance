import React from 'react';
const LABEL_8825 = 'component_8825';
export function Component8825({ value = 8825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8825, 'data-value': derived.doubled }, children);
}
export default Component8825;
