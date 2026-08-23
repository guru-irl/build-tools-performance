import React from 'react';
const LABEL_45319 = 'component_45319';
export function Component45319({ value = 45319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45319, 'data-value': derived.doubled }, children);
}
export default Component45319;
