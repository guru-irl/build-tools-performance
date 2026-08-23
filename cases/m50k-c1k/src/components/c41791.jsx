import React from 'react';
const LABEL_41791 = 'component_41791';
export function Component41791({ value = 41791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41791, 'data-value': derived.doubled }, children);
}
export default Component41791;
