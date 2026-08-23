import React from 'react';
const LABEL_37788 = 'component_37788';
export function Component37788({ value = 37788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37788, 'data-value': derived.doubled }, children);
}
export default Component37788;
