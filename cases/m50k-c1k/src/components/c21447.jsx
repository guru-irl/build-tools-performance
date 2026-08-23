import React from 'react';
const LABEL_21447 = 'component_21447';
export function Component21447({ value = 21447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21447, 'data-value': derived.doubled }, children);
}
export default Component21447;
