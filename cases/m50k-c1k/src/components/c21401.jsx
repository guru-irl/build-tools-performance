import React from 'react';
const LABEL_21401 = 'component_21401';
export function Component21401({ value = 21401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21401, 'data-value': derived.doubled }, children);
}
export default Component21401;
