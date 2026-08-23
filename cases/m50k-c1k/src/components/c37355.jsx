import React from 'react';
const LABEL_37355 = 'component_37355';
export function Component37355({ value = 37355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37355, 'data-value': derived.doubled }, children);
}
export default Component37355;
