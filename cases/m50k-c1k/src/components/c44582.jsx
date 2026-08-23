import React from 'react';
const LABEL_44582 = 'component_44582';
export function Component44582({ value = 44582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44582, 'data-value': derived.doubled }, children);
}
export default Component44582;
