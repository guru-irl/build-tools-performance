import React from 'react';
const LABEL_30734 = 'component_30734';
export function Component30734({ value = 30734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30734, 'data-value': derived.doubled }, children);
}
export default Component30734;
