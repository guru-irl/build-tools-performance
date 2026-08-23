import React from 'react';
const LABEL_42366 = 'component_42366';
export function Component42366({ value = 42366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42366, 'data-value': derived.doubled }, children);
}
export default Component42366;
