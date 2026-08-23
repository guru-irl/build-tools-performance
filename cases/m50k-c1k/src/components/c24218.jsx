import React from 'react';
const LABEL_24218 = 'component_24218';
export function Component24218({ value = 24218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24218, 'data-value': derived.doubled }, children);
}
export default Component24218;
