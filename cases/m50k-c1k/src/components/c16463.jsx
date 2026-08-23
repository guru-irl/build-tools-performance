import React from 'react';
const LABEL_16463 = 'component_16463';
export function Component16463({ value = 16463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16463, 'data-value': derived.doubled }, children);
}
export default Component16463;
