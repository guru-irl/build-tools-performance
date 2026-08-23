import React from 'react';
const LABEL_37126 = 'component_37126';
export function Component37126({ value = 37126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37126, 'data-value': derived.doubled }, children);
}
export default Component37126;
