import React from 'react';
const LABEL_5177 = 'component_5177';
export function Component5177({ value = 5177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5177, 'data-value': derived.doubled }, children);
}
export default Component5177;
