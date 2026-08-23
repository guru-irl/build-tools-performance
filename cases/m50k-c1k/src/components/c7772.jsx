import React from 'react';
const LABEL_7772 = 'component_7772';
export function Component7772({ value = 7772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7772, 'data-value': derived.doubled }, children);
}
export default Component7772;
