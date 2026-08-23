import React from 'react';
const LABEL_40874 = 'component_40874';
export function Component40874({ value = 40874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40874, 'data-value': derived.doubled }, children);
}
export default Component40874;
