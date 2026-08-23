import React from 'react';
const LABEL_34627 = 'component_34627';
export function Component34627({ value = 34627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34627, 'data-value': derived.doubled }, children);
}
export default Component34627;
