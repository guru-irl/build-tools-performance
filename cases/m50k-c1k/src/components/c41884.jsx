import React from 'react';
const LABEL_41884 = 'component_41884';
export function Component41884({ value = 41884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41884, 'data-value': derived.doubled }, children);
}
export default Component41884;
