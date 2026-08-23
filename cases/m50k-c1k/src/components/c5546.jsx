import React from 'react';
const LABEL_5546 = 'component_5546';
export function Component5546({ value = 5546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5546, 'data-value': derived.doubled }, children);
}
export default Component5546;
