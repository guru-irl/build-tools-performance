import React from 'react';
const LABEL_30806 = 'component_30806';
export function Component30806({ value = 30806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30806, 'data-value': derived.doubled }, children);
}
export default Component30806;
