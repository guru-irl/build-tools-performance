import React from 'react';
const LABEL_36344 = 'component_36344';
export function Component36344({ value = 36344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36344, 'data-value': derived.doubled }, children);
}
export default Component36344;
