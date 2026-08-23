import React from 'react';
const LABEL_44191 = 'component_44191';
export function Component44191({ value = 44191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44191, 'data-value': derived.doubled }, children);
}
export default Component44191;
