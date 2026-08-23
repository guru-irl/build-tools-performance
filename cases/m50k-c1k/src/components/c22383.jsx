import React from 'react';
const LABEL_22383 = 'component_22383';
export function Component22383({ value = 22383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22383, 'data-value': derived.doubled }, children);
}
export default Component22383;
