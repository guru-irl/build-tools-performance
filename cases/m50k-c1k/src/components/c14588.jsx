import React from 'react';
const LABEL_14588 = 'component_14588';
export function Component14588({ value = 14588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14588, 'data-value': derived.doubled }, children);
}
export default Component14588;
