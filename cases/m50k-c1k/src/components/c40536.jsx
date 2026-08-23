import React from 'react';
const LABEL_40536 = 'component_40536';
export function Component40536({ value = 40536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40536, 'data-value': derived.doubled }, children);
}
export default Component40536;
