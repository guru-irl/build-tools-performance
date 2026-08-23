import React from 'react';
const LABEL_1040 = 'component_1040';
export function Component1040({ value = 1040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1040, 'data-value': derived.doubled }, children);
}
export default Component1040;
