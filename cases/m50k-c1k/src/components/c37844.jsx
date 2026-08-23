import React from 'react';
const LABEL_37844 = 'component_37844';
export function Component37844({ value = 37844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37844, 'data-value': derived.doubled }, children);
}
export default Component37844;
