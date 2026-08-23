import React from 'react';
const LABEL_36003 = 'component_36003';
export function Component36003({ value = 36003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36003, 'data-value': derived.doubled }, children);
}
export default Component36003;
