import React from 'react';
const LABEL_8447 = 'component_8447';
export function Component8447({ value = 8447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8447, 'data-value': derived.doubled }, children);
}
export default Component8447;
