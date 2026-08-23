import React from 'react';
const LABEL_11888 = 'component_11888';
export function Component11888({ value = 11888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11888, 'data-value': derived.doubled }, children);
}
export default Component11888;
