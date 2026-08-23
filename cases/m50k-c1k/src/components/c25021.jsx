import React from 'react';
const LABEL_25021 = 'component_25021';
export function Component25021({ value = 25021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25021, 'data-value': derived.doubled }, children);
}
export default Component25021;
