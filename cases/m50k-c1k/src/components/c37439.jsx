import React from 'react';
const LABEL_37439 = 'component_37439';
export function Component37439({ value = 37439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37439, 'data-value': derived.doubled }, children);
}
export default Component37439;
