import React from 'react';
const LABEL_46615 = 'component_46615';
export function Component46615({ value = 46615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46615, 'data-value': derived.doubled }, children);
}
export default Component46615;
