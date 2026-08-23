import React from 'react';
const LABEL_23388 = 'component_23388';
export function Component23388({ value = 23388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23388, 'data-value': derived.doubled }, children);
}
export default Component23388;
