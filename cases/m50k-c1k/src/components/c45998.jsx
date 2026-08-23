import React from 'react';
const LABEL_45998 = 'component_45998';
export function Component45998({ value = 45998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45998, 'data-value': derived.doubled }, children);
}
export default Component45998;
