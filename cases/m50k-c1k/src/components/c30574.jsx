import React from 'react';
const LABEL_30574 = 'component_30574';
export function Component30574({ value = 30574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30574, 'data-value': derived.doubled }, children);
}
export default Component30574;
