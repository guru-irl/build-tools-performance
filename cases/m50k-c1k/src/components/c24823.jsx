import React from 'react';
const LABEL_24823 = 'component_24823';
export function Component24823({ value = 24823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24823, 'data-value': derived.doubled }, children);
}
export default Component24823;
