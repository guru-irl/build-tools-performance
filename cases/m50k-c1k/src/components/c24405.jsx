import React from 'react';
const LABEL_24405 = 'component_24405';
export function Component24405({ value = 24405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24405, 'data-value': derived.doubled }, children);
}
export default Component24405;
