import React from 'react';
const LABEL_15447 = 'component_15447';
export function Component15447({ value = 15447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15447, 'data-value': derived.doubled }, children);
}
export default Component15447;
