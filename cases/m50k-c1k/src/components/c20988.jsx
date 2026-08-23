import React from 'react';
const LABEL_20988 = 'component_20988';
export function Component20988({ value = 20988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20988, 'data-value': derived.doubled }, children);
}
export default Component20988;
