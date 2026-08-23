import React from 'react';
const LABEL_7870 = 'component_7870';
export function Component7870({ value = 7870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7870, 'data-value': derived.doubled }, children);
}
export default Component7870;
