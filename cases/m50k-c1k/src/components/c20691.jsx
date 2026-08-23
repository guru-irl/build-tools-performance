import React from 'react';
const LABEL_20691 = 'component_20691';
export function Component20691({ value = 20691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20691, 'data-value': derived.doubled }, children);
}
export default Component20691;
