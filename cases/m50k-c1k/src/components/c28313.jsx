import React from 'react';
const LABEL_28313 = 'component_28313';
export function Component28313({ value = 28313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28313, 'data-value': derived.doubled }, children);
}
export default Component28313;
