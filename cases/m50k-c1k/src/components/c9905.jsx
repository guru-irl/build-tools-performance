import React from 'react';
const LABEL_9905 = 'component_9905';
export function Component9905({ value = 9905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9905, 'data-value': derived.doubled }, children);
}
export default Component9905;
