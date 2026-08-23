import React from 'react';
const LABEL_19179 = 'component_19179';
export function Component19179({ value = 19179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19179, 'data-value': derived.doubled }, children);
}
export default Component19179;
