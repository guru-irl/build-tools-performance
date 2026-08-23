import React from 'react';
const LABEL_40812 = 'component_40812';
export function Component40812({ value = 40812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40812, 'data-value': derived.doubled }, children);
}
export default Component40812;
