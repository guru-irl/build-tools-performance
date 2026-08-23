import React from 'react';
const LABEL_9393 = 'component_9393';
export function Component9393({ value = 9393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9393, 'data-value': derived.doubled }, children);
}
export default Component9393;
