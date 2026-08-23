import React from 'react';
const LABEL_5077 = 'component_5077';
export function Component5077({ value = 5077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5077, 'data-value': derived.doubled }, children);
}
export default Component5077;
