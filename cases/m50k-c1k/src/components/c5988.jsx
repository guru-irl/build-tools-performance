import React from 'react';
const LABEL_5988 = 'component_5988';
export function Component5988({ value = 5988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5988, 'data-value': derived.doubled }, children);
}
export default Component5988;
