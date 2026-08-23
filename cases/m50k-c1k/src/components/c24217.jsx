import React from 'react';
const LABEL_24217 = 'component_24217';
export function Component24217({ value = 24217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24217, 'data-value': derived.doubled }, children);
}
export default Component24217;
