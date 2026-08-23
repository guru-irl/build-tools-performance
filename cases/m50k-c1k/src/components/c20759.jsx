import React from 'react';
const LABEL_20759 = 'component_20759';
export function Component20759({ value = 20759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20759, 'data-value': derived.doubled }, children);
}
export default Component20759;
