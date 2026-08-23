import React from 'react';
const LABEL_31803 = 'component_31803';
export function Component31803({ value = 31803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31803, 'data-value': derived.doubled }, children);
}
export default Component31803;
