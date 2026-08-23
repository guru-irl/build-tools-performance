import React from 'react';
const LABEL_9414 = 'component_9414';
export function Component9414({ value = 9414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9414, 'data-value': derived.doubled }, children);
}
export default Component9414;
