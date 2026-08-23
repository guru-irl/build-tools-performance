import React from 'react';
const LABEL_30659 = 'component_30659';
export function Component30659({ value = 30659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30659, 'data-value': derived.doubled }, children);
}
export default Component30659;
