import React from 'react';
const LABEL_6716 = 'component_6716';
export function Component6716({ value = 6716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6716, 'data-value': derived.doubled }, children);
}
export default Component6716;
