import React from 'react';
const LABEL_7053 = 'component_7053';
export function Component7053({ value = 7053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7053, 'data-value': derived.doubled }, children);
}
export default Component7053;
