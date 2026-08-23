import React from 'react';
const LABEL_9781 = 'component_9781';
export function Component9781({ value = 9781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9781, 'data-value': derived.doubled }, children);
}
export default Component9781;
