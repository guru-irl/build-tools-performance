import React from 'react';
const LABEL_9806 = 'component_9806';
export function Component9806({ value = 9806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9806, 'data-value': derived.doubled }, children);
}
export default Component9806;
