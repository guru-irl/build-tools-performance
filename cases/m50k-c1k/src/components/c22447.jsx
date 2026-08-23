import React from 'react';
const LABEL_22447 = 'component_22447';
export function Component22447({ value = 22447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22447, 'data-value': derived.doubled }, children);
}
export default Component22447;
