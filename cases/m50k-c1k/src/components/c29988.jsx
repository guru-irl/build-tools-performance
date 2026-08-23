import React from 'react';
const LABEL_29988 = 'component_29988';
export function Component29988({ value = 29988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29988, 'data-value': derived.doubled }, children);
}
export default Component29988;
