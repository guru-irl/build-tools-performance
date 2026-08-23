import React from 'react';
const LABEL_32003 = 'component_32003';
export function Component32003({ value = 32003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32003, 'data-value': derived.doubled }, children);
}
export default Component32003;
