import React from 'react';
const LABEL_37920 = 'component_37920';
export function Component37920({ value = 37920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37920, 'data-value': derived.doubled }, children);
}
export default Component37920;
