import React from 'react';
const LABEL_7568 = 'component_7568';
export function Component7568({ value = 7568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7568, 'data-value': derived.doubled }, children);
}
export default Component7568;
