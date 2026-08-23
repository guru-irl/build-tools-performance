import React from 'react';
const LABEL_26571 = 'component_26571';
export function Component26571({ value = 26571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26571, 'data-value': derived.doubled }, children);
}
export default Component26571;
