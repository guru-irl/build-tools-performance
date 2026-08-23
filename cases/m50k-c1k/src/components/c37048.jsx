import React from 'react';
const LABEL_37048 = 'component_37048';
export function Component37048({ value = 37048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37048, 'data-value': derived.doubled }, children);
}
export default Component37048;
