import React from 'react';
const LABEL_37408 = 'component_37408';
export function Component37408({ value = 37408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37408, 'data-value': derived.doubled }, children);
}
export default Component37408;
