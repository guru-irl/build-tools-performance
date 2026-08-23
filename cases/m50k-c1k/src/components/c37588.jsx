import React from 'react';
const LABEL_37588 = 'component_37588';
export function Component37588({ value = 37588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37588, 'data-value': derived.doubled }, children);
}
export default Component37588;
