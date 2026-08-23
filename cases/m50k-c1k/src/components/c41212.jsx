import React from 'react';
const LABEL_41212 = 'component_41212';
export function Component41212({ value = 41212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41212, 'data-value': derived.doubled }, children);
}
export default Component41212;
