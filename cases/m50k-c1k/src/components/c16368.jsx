import React from 'react';
const LABEL_16368 = 'component_16368';
export function Component16368({ value = 16368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16368, 'data-value': derived.doubled }, children);
}
export default Component16368;
