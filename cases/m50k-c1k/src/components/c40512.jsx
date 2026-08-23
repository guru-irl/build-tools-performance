import React from 'react';
const LABEL_40512 = 'component_40512';
export function Component40512({ value = 40512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40512, 'data-value': derived.doubled }, children);
}
export default Component40512;
