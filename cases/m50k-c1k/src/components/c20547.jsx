import React from 'react';
const LABEL_20547 = 'component_20547';
export function Component20547({ value = 20547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20547, 'data-value': derived.doubled }, children);
}
export default Component20547;
