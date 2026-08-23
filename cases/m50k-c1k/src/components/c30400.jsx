import React from 'react';
const LABEL_30400 = 'component_30400';
export function Component30400({ value = 30400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30400, 'data-value': derived.doubled }, children);
}
export default Component30400;
