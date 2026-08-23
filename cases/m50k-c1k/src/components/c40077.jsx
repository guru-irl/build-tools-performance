import React from 'react';
const LABEL_40077 = 'component_40077';
export function Component40077({ value = 40077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40077, 'data-value': derived.doubled }, children);
}
export default Component40077;
