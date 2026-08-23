import React from 'react';
const LABEL_42469 = 'component_42469';
export function Component42469({ value = 42469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42469, 'data-value': derived.doubled }, children);
}
export default Component42469;
