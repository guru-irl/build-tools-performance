import React from 'react';
const LABEL_9573 = 'component_9573';
export function Component9573({ value = 9573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9573, 'data-value': derived.doubled }, children);
}
export default Component9573;
