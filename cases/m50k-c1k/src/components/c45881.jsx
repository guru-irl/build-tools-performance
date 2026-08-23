import React from 'react';
const LABEL_45881 = 'component_45881';
export function Component45881({ value = 45881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45881, 'data-value': derived.doubled }, children);
}
export default Component45881;
