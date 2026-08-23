import React from 'react';
const LABEL_1460 = 'component_1460';
export function Component1460({ value = 1460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1460, 'data-value': derived.doubled }, children);
}
export default Component1460;
