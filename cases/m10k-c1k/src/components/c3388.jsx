import React from 'react';
const LABEL_3388 = 'component_3388';
export function Component3388({ value = 3388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3388, 'data-value': derived.doubled }, children);
}
export default Component3388;
