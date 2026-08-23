import React from 'react';
const LABEL_33537 = 'component_33537';
export function Component33537({ value = 33537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33537, 'data-value': derived.doubled }, children);
}
export default Component33537;
