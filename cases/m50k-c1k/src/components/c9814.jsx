import React from 'react';
const LABEL_9814 = 'component_9814';
export function Component9814({ value = 9814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9814, 'data-value': derived.doubled }, children);
}
export default Component9814;
