import React from 'react';
const LABEL_36982 = 'component_36982';
export function Component36982({ value = 36982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36982, 'data-value': derived.doubled }, children);
}
export default Component36982;
