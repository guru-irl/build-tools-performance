import React from 'react';
const LABEL_36258 = 'component_36258';
export function Component36258({ value = 36258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36258, 'data-value': derived.doubled }, children);
}
export default Component36258;
