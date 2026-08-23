import React from 'react';
const LABEL_9035 = 'component_9035';
export function Component9035({ value = 9035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9035, 'data-value': derived.doubled }, children);
}
export default Component9035;
