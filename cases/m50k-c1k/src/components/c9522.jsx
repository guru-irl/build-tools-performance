import React from 'react';
const LABEL_9522 = 'component_9522';
export function Component9522({ value = 9522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9522, 'data-value': derived.doubled }, children);
}
export default Component9522;
