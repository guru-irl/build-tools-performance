import React from 'react';
const LABEL_46388 = 'component_46388';
export function Component46388({ value = 46388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46388, 'data-value': derived.doubled }, children);
}
export default Component46388;
