import React from 'react';
const LABEL_748 = 'component_748';
export function Component748({ value = 748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_748, 'data-value': derived.doubled }, children);
}
export default Component748;
