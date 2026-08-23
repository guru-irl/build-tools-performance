import React from 'react';
const LABEL_30446 = 'component_30446';
export function Component30446({ value = 30446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30446, 'data-value': derived.doubled }, children);
}
export default Component30446;
