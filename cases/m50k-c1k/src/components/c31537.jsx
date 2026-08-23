import React from 'react';
const LABEL_31537 = 'component_31537';
export function Component31537({ value = 31537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31537, 'data-value': derived.doubled }, children);
}
export default Component31537;
