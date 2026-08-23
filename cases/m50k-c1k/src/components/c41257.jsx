import React from 'react';
const LABEL_41257 = 'component_41257';
export function Component41257({ value = 41257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41257, 'data-value': derived.doubled }, children);
}
export default Component41257;
