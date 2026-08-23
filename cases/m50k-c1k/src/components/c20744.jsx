import React from 'react';
const LABEL_20744 = 'component_20744';
export function Component20744({ value = 20744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20744, 'data-value': derived.doubled }, children);
}
export default Component20744;
