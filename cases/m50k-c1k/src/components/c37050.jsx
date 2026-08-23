import React from 'react';
const LABEL_37050 = 'component_37050';
export function Component37050({ value = 37050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37050, 'data-value': derived.doubled }, children);
}
export default Component37050;
