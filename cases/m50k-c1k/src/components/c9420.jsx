import React from 'react';
const LABEL_9420 = 'component_9420';
export function Component9420({ value = 9420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9420, 'data-value': derived.doubled }, children);
}
export default Component9420;
