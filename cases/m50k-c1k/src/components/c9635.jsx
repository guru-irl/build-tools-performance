import React from 'react';
const LABEL_9635 = 'component_9635';
export function Component9635({ value = 9635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9635, 'data-value': derived.doubled }, children);
}
export default Component9635;
