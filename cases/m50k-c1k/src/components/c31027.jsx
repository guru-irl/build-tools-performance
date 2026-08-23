import React from 'react';
const LABEL_31027 = 'component_31027';
export function Component31027({ value = 31027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31027, 'data-value': derived.doubled }, children);
}
export default Component31027;
