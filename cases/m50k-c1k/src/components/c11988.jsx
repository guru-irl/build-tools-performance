import React from 'react';
const LABEL_11988 = 'component_11988';
export function Component11988({ value = 11988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11988, 'data-value': derived.doubled }, children);
}
export default Component11988;
