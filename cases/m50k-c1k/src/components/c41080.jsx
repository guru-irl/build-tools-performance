import React from 'react';
const LABEL_41080 = 'component_41080';
export function Component41080({ value = 41080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41080, 'data-value': derived.doubled }, children);
}
export default Component41080;
