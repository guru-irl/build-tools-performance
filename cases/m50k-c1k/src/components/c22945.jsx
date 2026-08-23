import React from 'react';
const LABEL_22945 = 'component_22945';
export function Component22945({ value = 22945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22945, 'data-value': derived.doubled }, children);
}
export default Component22945;
