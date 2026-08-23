import React from 'react';
const LABEL_41214 = 'component_41214';
export function Component41214({ value = 41214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41214, 'data-value': derived.doubled }, children);
}
export default Component41214;
