import React from 'react';
const LABEL_41588 = 'component_41588';
export function Component41588({ value = 41588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41588, 'data-value': derived.doubled }, children);
}
export default Component41588;
