import React from 'react';
const LABEL_46082 = 'component_46082';
export function Component46082({ value = 46082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46082, 'data-value': derived.doubled }, children);
}
export default Component46082;
