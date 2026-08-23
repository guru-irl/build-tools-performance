import React from 'react';
const LABEL_41465 = 'component_41465';
export function Component41465({ value = 41465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41465, 'data-value': derived.doubled }, children);
}
export default Component41465;
