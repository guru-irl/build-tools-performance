import React from 'react';
const LABEL_1580 = 'component_1580';
export function Component1580({ value = 1580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1580, 'data-value': derived.doubled }, children);
}
export default Component1580;
