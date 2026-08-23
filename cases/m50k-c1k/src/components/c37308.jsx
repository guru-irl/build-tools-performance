import React from 'react';
const LABEL_37308 = 'component_37308';
export function Component37308({ value = 37308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37308, 'data-value': derived.doubled }, children);
}
export default Component37308;
