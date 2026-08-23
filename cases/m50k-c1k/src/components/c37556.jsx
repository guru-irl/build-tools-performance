import React from 'react';
const LABEL_37556 = 'component_37556';
export function Component37556({ value = 37556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37556, 'data-value': derived.doubled }, children);
}
export default Component37556;
