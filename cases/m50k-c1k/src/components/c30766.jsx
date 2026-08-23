import React from 'react';
const LABEL_30766 = 'component_30766';
export function Component30766({ value = 30766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30766, 'data-value': derived.doubled }, children);
}
export default Component30766;
