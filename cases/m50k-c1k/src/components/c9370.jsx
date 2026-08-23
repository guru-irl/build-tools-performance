import React from 'react';
const LABEL_9370 = 'component_9370';
export function Component9370({ value = 9370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9370, 'data-value': derived.doubled }, children);
}
export default Component9370;
