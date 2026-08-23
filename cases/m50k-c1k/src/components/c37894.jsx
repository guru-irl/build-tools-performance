import React from 'react';
const LABEL_37894 = 'component_37894';
export function Component37894({ value = 37894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37894, 'data-value': derived.doubled }, children);
}
export default Component37894;
