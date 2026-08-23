import React from 'react';
const LABEL_11189 = 'component_11189';
export function Component11189({ value = 11189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11189, 'data-value': derived.doubled }, children);
}
export default Component11189;
