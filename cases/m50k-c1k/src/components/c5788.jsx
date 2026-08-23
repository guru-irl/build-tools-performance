import React from 'react';
const LABEL_5788 = 'component_5788';
export function Component5788({ value = 5788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5788, 'data-value': derived.doubled }, children);
}
export default Component5788;
