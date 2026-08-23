import React from 'react';
const LABEL_7755 = 'component_7755';
export function Component7755({ value = 7755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7755, 'data-value': derived.doubled }, children);
}
export default Component7755;
