import React from 'react';
const LABEL_9820 = 'component_9820';
export function Component9820({ value = 9820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9820, 'data-value': derived.doubled }, children);
}
export default Component9820;
