import React from 'react';
const LABEL_20870 = 'component_20870';
export function Component20870({ value = 20870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20870, 'data-value': derived.doubled }, children);
}
export default Component20870;
