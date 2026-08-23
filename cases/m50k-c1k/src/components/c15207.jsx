import React from 'react';
const LABEL_15207 = 'component_15207';
export function Component15207({ value = 15207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15207, 'data-value': derived.doubled }, children);
}
export default Component15207;
