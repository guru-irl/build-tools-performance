import React from 'react';
const LABEL_28911 = 'component_28911';
export function Component28911({ value = 28911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28911, 'data-value': derived.doubled }, children);
}
export default Component28911;
