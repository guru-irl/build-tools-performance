import React from 'react';
const LABEL_23447 = 'component_23447';
export function Component23447({ value = 23447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23447, 'data-value': derived.doubled }, children);
}
export default Component23447;
