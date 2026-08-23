import React from 'react';
const LABEL_30897 = 'component_30897';
export function Component30897({ value = 30897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30897, 'data-value': derived.doubled }, children);
}
export default Component30897;
