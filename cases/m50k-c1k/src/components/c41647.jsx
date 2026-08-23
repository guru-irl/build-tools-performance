import React from 'react';
const LABEL_41647 = 'component_41647';
export function Component41647({ value = 41647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41647, 'data-value': derived.doubled }, children);
}
export default Component41647;
