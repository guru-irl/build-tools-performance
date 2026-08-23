import React from 'react';
const LABEL_30228 = 'component_30228';
export function Component30228({ value = 30228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30228, 'data-value': derived.doubled }, children);
}
export default Component30228;
