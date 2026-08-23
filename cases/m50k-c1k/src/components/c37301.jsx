import React from 'react';
const LABEL_37301 = 'component_37301';
export function Component37301({ value = 37301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37301, 'data-value': derived.doubled }, children);
}
export default Component37301;
