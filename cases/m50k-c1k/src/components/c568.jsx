import React from 'react';
const LABEL_568 = 'component_568';
export function Component568({ value = 568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_568, 'data-value': derived.doubled }, children);
}
export default Component568;
