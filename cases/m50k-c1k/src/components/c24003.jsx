import React from 'react';
const LABEL_24003 = 'component_24003';
export function Component24003({ value = 24003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24003, 'data-value': derived.doubled }, children);
}
export default Component24003;
