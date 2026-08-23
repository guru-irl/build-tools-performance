import React from 'react';
const LABEL_19562 = 'component_19562';
export function Component19562({ value = 19562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19562, 'data-value': derived.doubled }, children);
}
export default Component19562;
