import React from 'react';
const LABEL_37644 = 'component_37644';
export function Component37644({ value = 37644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37644, 'data-value': derived.doubled }, children);
}
export default Component37644;
