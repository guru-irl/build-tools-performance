import React from 'react';
const LABEL_16956 = 'component_16956';
export function Component16956({ value = 16956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16956, 'data-value': derived.doubled }, children);
}
export default Component16956;
