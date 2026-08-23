import React from 'react';
const LABEL_37001 = 'component_37001';
export function Component37001({ value = 37001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37001, 'data-value': derived.doubled }, children);
}
export default Component37001;
