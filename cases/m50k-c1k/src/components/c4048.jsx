import React from 'react';
const LABEL_4048 = 'component_4048';
export function Component4048({ value = 4048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4048, 'data-value': derived.doubled }, children);
}
export default Component4048;
