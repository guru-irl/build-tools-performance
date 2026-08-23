import React from 'react';
const LABEL_4162 = 'component_4162';
export function Component4162({ value = 4162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4162, 'data-value': derived.doubled }, children);
}
export default Component4162;
