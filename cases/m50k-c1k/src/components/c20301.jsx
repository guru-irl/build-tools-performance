import React from 'react';
const LABEL_20301 = 'component_20301';
export function Component20301({ value = 20301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20301, 'data-value': derived.doubled }, children);
}
export default Component20301;
