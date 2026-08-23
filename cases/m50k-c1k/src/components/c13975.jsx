import React from 'react';
const LABEL_13975 = 'component_13975';
export function Component13975({ value = 13975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13975, 'data-value': derived.doubled }, children);
}
export default Component13975;
