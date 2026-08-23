import React from 'react';
const LABEL_40400 = 'component_40400';
export function Component40400({ value = 40400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40400, 'data-value': derived.doubled }, children);
}
export default Component40400;
