import React from 'react';
const LABEL_46040 = 'component_46040';
export function Component46040({ value = 46040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46040, 'data-value': derived.doubled }, children);
}
export default Component46040;
