import React from 'react';
const LABEL_35217 = 'component_35217';
export function Component35217({ value = 35217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35217, 'data-value': derived.doubled }, children);
}
export default Component35217;
