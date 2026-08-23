import React from 'react';
const LABEL_38217 = 'component_38217';
export function Component38217({ value = 38217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38217, 'data-value': derived.doubled }, children);
}
export default Component38217;
