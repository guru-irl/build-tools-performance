import React from 'react';
const LABEL_7401 = 'component_7401';
export function Component7401({ value = 7401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7401, 'data-value': derived.doubled }, children);
}
export default Component7401;
