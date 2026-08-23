import React from 'react';
const LABEL_28718 = 'component_28718';
export function Component28718({ value = 28718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28718, 'data-value': derived.doubled }, children);
}
export default Component28718;
