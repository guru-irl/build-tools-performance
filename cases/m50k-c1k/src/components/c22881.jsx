import React from 'react';
const LABEL_22881 = 'component_22881';
export function Component22881({ value = 22881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22881, 'data-value': derived.doubled }, children);
}
export default Component22881;
