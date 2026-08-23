import React from 'react';
const LABEL_7040 = 'component_7040';
export function Component7040({ value = 7040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7040, 'data-value': derived.doubled }, children);
}
export default Component7040;
