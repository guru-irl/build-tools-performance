import React from 'react';
const LABEL_10447 = 'component_10447';
export function Component10447({ value = 10447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10447, 'data-value': derived.doubled }, children);
}
export default Component10447;
