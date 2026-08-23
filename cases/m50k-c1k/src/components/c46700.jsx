import React from 'react';
const LABEL_46700 = 'component_46700';
export function Component46700({ value = 46700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46700, 'data-value': derived.doubled }, children);
}
export default Component46700;
