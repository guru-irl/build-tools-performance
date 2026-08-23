import React from 'react';
const LABEL_37111 = 'component_37111';
export function Component37111({ value = 37111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37111, 'data-value': derived.doubled }, children);
}
export default Component37111;
