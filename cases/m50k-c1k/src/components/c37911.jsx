import React from 'react';
const LABEL_37911 = 'component_37911';
export function Component37911({ value = 37911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37911, 'data-value': derived.doubled }, children);
}
export default Component37911;
