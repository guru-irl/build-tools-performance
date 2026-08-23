import React from 'react';
const LABEL_9581 = 'component_9581';
export function Component9581({ value = 9581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9581, 'data-value': derived.doubled }, children);
}
export default Component9581;
