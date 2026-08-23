import React from 'react';
const LABEL_36571 = 'component_36571';
export function Component36571({ value = 36571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36571, 'data-value': derived.doubled }, children);
}
export default Component36571;
