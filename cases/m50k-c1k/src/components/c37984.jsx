import React from 'react';
const LABEL_37984 = 'component_37984';
export function Component37984({ value = 37984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37984, 'data-value': derived.doubled }, children);
}
export default Component37984;
