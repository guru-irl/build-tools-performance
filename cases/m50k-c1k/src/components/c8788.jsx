import React from 'react';
const LABEL_8788 = 'component_8788';
export function Component8788({ value = 8788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8788, 'data-value': derived.doubled }, children);
}
export default Component8788;
