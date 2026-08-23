import React from 'react';
const LABEL_15415 = 'component_15415';
export function Component15415({ value = 15415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15415, 'data-value': derived.doubled }, children);
}
export default Component15415;
