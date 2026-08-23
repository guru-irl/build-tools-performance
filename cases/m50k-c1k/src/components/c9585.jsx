import React from 'react';
const LABEL_9585 = 'component_9585';
export function Component9585({ value = 9585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9585, 'data-value': derived.doubled }, children);
}
export default Component9585;
