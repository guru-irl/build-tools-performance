import React from 'react';
const LABEL_9353 = 'component_9353';
export function Component9353({ value = 9353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9353, 'data-value': derived.doubled }, children);
}
export default Component9353;
