import React from 'react';
const LABEL_13388 = 'component_13388';
export function Component13388({ value = 13388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13388, 'data-value': derived.doubled }, children);
}
export default Component13388;
