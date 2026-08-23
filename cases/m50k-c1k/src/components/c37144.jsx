import React from 'react';
const LABEL_37144 = 'component_37144';
export function Component37144({ value = 37144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37144, 'data-value': derived.doubled }, children);
}
export default Component37144;
