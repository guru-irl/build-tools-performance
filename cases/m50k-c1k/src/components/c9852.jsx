import React from 'react';
const LABEL_9852 = 'component_9852';
export function Component9852({ value = 9852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9852, 'data-value': derived.doubled }, children);
}
export default Component9852;
