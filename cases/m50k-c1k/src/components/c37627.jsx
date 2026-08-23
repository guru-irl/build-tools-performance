import React from 'react';
const LABEL_37627 = 'component_37627';
export function Component37627({ value = 37627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37627, 'data-value': derived.doubled }, children);
}
export default Component37627;
