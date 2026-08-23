import React from 'react';
const LABEL_9365 = 'component_9365';
export function Component9365({ value = 9365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9365, 'data-value': derived.doubled }, children);
}
export default Component9365;
