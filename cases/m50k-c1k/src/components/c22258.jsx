import React from 'react';
const LABEL_22258 = 'component_22258';
export function Component22258({ value = 22258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22258, 'data-value': derived.doubled }, children);
}
export default Component22258;
