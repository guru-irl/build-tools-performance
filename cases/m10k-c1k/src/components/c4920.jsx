import React from 'react';
const LABEL_4920 = 'component_4920';
export function Component4920({ value = 4920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4920, 'data-value': derived.doubled }, children);
}
export default Component4920;
