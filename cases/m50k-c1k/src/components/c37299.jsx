import React from 'react';
const LABEL_37299 = 'component_37299';
export function Component37299({ value = 37299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37299, 'data-value': derived.doubled }, children);
}
export default Component37299;
