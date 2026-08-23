import React from 'react';
const LABEL_40162 = 'component_40162';
export function Component40162({ value = 40162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40162, 'data-value': derived.doubled }, children);
}
export default Component40162;
