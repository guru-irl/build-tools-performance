import React from 'react';
const LABEL_31954 = 'component_31954';
export function Component31954({ value = 31954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31954, 'data-value': derived.doubled }, children);
}
export default Component31954;
