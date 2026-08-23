import React from 'react';
const LABEL_37645 = 'component_37645';
export function Component37645({ value = 37645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37645, 'data-value': derived.doubled }, children);
}
export default Component37645;
