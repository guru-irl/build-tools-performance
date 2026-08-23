import React from 'react';
const LABEL_7920 = 'component_7920';
export function Component7920({ value = 7920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7920, 'data-value': derived.doubled }, children);
}
export default Component7920;
