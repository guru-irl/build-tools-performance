import React from 'react';
const LABEL_37317 = 'component_37317';
export function Component37317({ value = 37317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37317, 'data-value': derived.doubled }, children);
}
export default Component37317;
