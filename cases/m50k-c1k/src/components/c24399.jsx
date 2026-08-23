import React from 'react';
const LABEL_24399 = 'component_24399';
export function Component24399({ value = 24399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24399, 'data-value': derived.doubled }, children);
}
export default Component24399;
