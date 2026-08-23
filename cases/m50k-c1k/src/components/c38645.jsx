import React from 'react';
const LABEL_38645 = 'component_38645';
export function Component38645({ value = 38645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38645, 'data-value': derived.doubled }, children);
}
export default Component38645;
