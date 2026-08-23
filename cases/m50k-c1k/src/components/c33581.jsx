import React from 'react';
const LABEL_33581 = 'component_33581';
export function Component33581({ value = 33581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33581, 'data-value': derived.doubled }, children);
}
export default Component33581;
