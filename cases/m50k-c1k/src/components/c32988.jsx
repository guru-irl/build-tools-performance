import React from 'react';
const LABEL_32988 = 'component_32988';
export function Component32988({ value = 32988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32988, 'data-value': derived.doubled }, children);
}
export default Component32988;
