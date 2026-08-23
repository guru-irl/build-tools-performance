import React from 'react';
const LABEL_45086 = 'component_45086';
export function Component45086({ value = 45086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45086, 'data-value': derived.doubled }, children);
}
export default Component45086;
