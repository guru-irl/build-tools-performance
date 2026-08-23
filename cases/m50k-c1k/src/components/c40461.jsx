import React from 'react';
const LABEL_40461 = 'component_40461';
export function Component40461({ value = 40461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40461, 'data-value': derived.doubled }, children);
}
export default Component40461;
