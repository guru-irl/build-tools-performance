import React from 'react';
const LABEL_36958 = 'component_36958';
export function Component36958({ value = 36958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36958, 'data-value': derived.doubled }, children);
}
export default Component36958;
