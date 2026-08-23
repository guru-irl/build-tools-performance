import React from 'react';
const LABEL_20602 = 'component_20602';
export function Component20602({ value = 20602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20602, 'data-value': derived.doubled }, children);
}
export default Component20602;
