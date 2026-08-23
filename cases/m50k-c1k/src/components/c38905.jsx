import React from 'react';
const LABEL_38905 = 'component_38905';
export function Component38905({ value = 38905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38905, 'data-value': derived.doubled }, children);
}
export default Component38905;
