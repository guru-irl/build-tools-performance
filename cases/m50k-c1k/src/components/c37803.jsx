import React from 'react';
const LABEL_37803 = 'component_37803';
export function Component37803({ value = 37803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37803, 'data-value': derived.doubled }, children);
}
export default Component37803;
