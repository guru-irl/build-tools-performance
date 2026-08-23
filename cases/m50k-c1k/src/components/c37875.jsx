import React from 'react';
const LABEL_37875 = 'component_37875';
export function Component37875({ value = 37875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37875, 'data-value': derived.doubled }, children);
}
export default Component37875;
