import React from 'react';
const LABEL_26003 = 'component_26003';
export function Component26003({ value = 26003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26003, 'data-value': derived.doubled }, children);
}
export default Component26003;
