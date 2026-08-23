import React from 'react';
const LABEL_37655 = 'component_37655';
export function Component37655({ value = 37655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37655, 'data-value': derived.doubled }, children);
}
export default Component37655;
