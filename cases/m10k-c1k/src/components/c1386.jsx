import React from 'react';
const LABEL_1386 = 'component_1386';
export function Component1386({ value = 1386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1386, 'data-value': derived.doubled }, children);
}
export default Component1386;
