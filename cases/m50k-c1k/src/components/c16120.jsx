import React from 'react';
const LABEL_16120 = 'component_16120';
export function Component16120({ value = 16120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16120, 'data-value': derived.doubled }, children);
}
export default Component16120;
