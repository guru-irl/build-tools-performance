import React from 'react';
const LABEL_1588 = 'component_1588';
export function Component1588({ value = 1588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1588, 'data-value': derived.doubled }, children);
}
export default Component1588;
