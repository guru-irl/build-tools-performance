import React from 'react';
const LABEL_20884 = 'component_20884';
export function Component20884({ value = 20884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20884, 'data-value': derived.doubled }, children);
}
export default Component20884;
