import React from 'react';
const LABEL_30875 = 'component_30875';
export function Component30875({ value = 30875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30875, 'data-value': derived.doubled }, children);
}
export default Component30875;
