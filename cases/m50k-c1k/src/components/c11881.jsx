import React from 'react';
const LABEL_11881 = 'component_11881';
export function Component11881({ value = 11881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11881, 'data-value': derived.doubled }, children);
}
export default Component11881;
