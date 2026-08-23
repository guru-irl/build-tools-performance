import React from 'react';
const LABEL_1837 = 'component_1837';
export function Component1837({ value = 1837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1837, 'data-value': derived.doubled }, children);
}
export default Component1837;
