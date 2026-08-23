import React from 'react';
const LABEL_37468 = 'component_37468';
export function Component37468({ value = 37468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37468, 'data-value': derived.doubled }, children);
}
export default Component37468;
