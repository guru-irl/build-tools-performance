import React from 'react';
const LABEL_37602 = 'component_37602';
export function Component37602({ value = 37602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37602, 'data-value': derived.doubled }, children);
}
export default Component37602;
