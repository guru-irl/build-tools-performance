import React from 'react';
const LABEL_9828 = 'component_9828';
export function Component9828({ value = 9828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9828, 'data-value': derived.doubled }, children);
}
export default Component9828;
