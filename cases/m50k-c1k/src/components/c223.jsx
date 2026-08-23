import React from 'react';
const LABEL_223 = 'component_223';
export function Component223({ value = 223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_223, 'data-value': derived.doubled }, children);
}
export default Component223;
