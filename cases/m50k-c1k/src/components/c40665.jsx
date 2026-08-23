import React from 'react';
const LABEL_40665 = 'component_40665';
export function Component40665({ value = 40665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40665, 'data-value': derived.doubled }, children);
}
export default Component40665;
