import React from 'react';
const LABEL_31349 = 'component_31349';
export function Component31349({ value = 31349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31349, 'data-value': derived.doubled }, children);
}
export default Component31349;
