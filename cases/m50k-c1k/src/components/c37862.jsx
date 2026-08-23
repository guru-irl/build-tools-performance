import React from 'react';
const LABEL_37862 = 'component_37862';
export function Component37862({ value = 37862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37862, 'data-value': derived.doubled }, children);
}
export default Component37862;
