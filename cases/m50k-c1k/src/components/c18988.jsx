import React from 'react';
const LABEL_18988 = 'component_18988';
export function Component18988({ value = 18988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18988, 'data-value': derived.doubled }, children);
}
export default Component18988;
