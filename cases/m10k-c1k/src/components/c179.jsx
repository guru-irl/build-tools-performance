import React from 'react';
const LABEL_179 = 'component_179';
export function Component179({ value = 179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_179, 'data-value': derived.doubled }, children);
}
export default Component179;
