import React from 'react';
const LABEL_172 = 'component_172';
export function Component172({ value = 172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_172, 'data-value': derived.doubled }, children);
}
export default Component172;
