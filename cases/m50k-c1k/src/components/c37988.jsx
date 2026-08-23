import React from 'react';
const LABEL_37988 = 'component_37988';
export function Component37988({ value = 37988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37988, 'data-value': derived.doubled }, children);
}
export default Component37988;
