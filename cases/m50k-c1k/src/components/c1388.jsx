import React from 'react';
const LABEL_1388 = 'component_1388';
export function Component1388({ value = 1388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1388, 'data-value': derived.doubled }, children);
}
export default Component1388;
