import React from 'react';
const LABEL_40588 = 'component_40588';
export function Component40588({ value = 40588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40588, 'data-value': derived.doubled }, children);
}
export default Component40588;
