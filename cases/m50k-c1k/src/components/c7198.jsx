import React from 'react';
const LABEL_7198 = 'component_7198';
export function Component7198({ value = 7198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7198, 'data-value': derived.doubled }, children);
}
export default Component7198;
