import React from 'react';
const LABEL_1832 = 'component_1832';
export function Component1832({ value = 1832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1832, 'data-value': derived.doubled }, children);
}
export default Component1832;
