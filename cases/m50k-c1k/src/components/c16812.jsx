import React from 'react';
const LABEL_16812 = 'component_16812';
export function Component16812({ value = 16812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16812, 'data-value': derived.doubled }, children);
}
export default Component16812;
