import React from 'react';
const LABEL_24100 = 'component_24100';
export function Component24100({ value = 24100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24100, 'data-value': derived.doubled }, children);
}
export default Component24100;
