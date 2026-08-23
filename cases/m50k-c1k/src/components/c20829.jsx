import React from 'react';
const LABEL_20829 = 'component_20829';
export function Component20829({ value = 20829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20829, 'data-value': derived.doubled }, children);
}
export default Component20829;
