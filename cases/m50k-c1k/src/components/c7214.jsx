import React from 'react';
const LABEL_7214 = 'component_7214';
export function Component7214({ value = 7214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7214, 'data-value': derived.doubled }, children);
}
export default Component7214;
