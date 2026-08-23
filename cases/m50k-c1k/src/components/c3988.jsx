import React from 'react';
const LABEL_3988 = 'component_3988';
export function Component3988({ value = 3988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3988, 'data-value': derived.doubled }, children);
}
export default Component3988;
