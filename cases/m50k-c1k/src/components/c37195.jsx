import React from 'react';
const LABEL_37195 = 'component_37195';
export function Component37195({ value = 37195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37195, 'data-value': derived.doubled }, children);
}
export default Component37195;
