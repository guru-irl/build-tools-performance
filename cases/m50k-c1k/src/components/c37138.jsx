import React from 'react';
const LABEL_37138 = 'component_37138';
export function Component37138({ value = 37138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37138, 'data-value': derived.doubled }, children);
}
export default Component37138;
