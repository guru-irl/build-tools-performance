import React from 'react';
const LABEL_37295 = 'component_37295';
export function Component37295({ value = 37295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37295, 'data-value': derived.doubled }, children);
}
export default Component37295;
