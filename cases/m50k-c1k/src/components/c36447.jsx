import React from 'react';
const LABEL_36447 = 'component_36447';
export function Component36447({ value = 36447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36447, 'data-value': derived.doubled }, children);
}
export default Component36447;
