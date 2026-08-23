import React from 'react';
const LABEL_40447 = 'component_40447';
export function Component40447({ value = 40447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40447, 'data-value': derived.doubled }, children);
}
export default Component40447;
