import React from 'react';
const LABEL_41065 = 'component_41065';
export function Component41065({ value = 41065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41065, 'data-value': derived.doubled }, children);
}
export default Component41065;
