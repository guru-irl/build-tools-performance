import React from 'react';
const LABEL_37666 = 'component_37666';
export function Component37666({ value = 37666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37666, 'data-value': derived.doubled }, children);
}
export default Component37666;
