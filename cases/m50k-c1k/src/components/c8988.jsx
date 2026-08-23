import React from 'react';
const LABEL_8988 = 'component_8988';
export function Component8988({ value = 8988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8988, 'data-value': derived.doubled }, children);
}
export default Component8988;
