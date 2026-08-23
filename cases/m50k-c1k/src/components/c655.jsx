import React from 'react';
const LABEL_655 = 'component_655';
export function Component655({ value = 655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_655, 'data-value': derived.doubled }, children);
}
export default Component655;
