import React from 'react';
const LABEL_4483 = 'component_4483';
export function Component4483({ value = 4483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4483, 'data-value': derived.doubled }, children);
}
export default Component4483;
