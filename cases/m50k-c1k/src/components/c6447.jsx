import React from 'react';
const LABEL_6447 = 'component_6447';
export function Component6447({ value = 6447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6447, 'data-value': derived.doubled }, children);
}
export default Component6447;
