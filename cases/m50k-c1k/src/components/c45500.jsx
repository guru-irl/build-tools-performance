import React from 'react';
const LABEL_45500 = 'component_45500';
export function Component45500({ value = 45500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45500, 'data-value': derived.doubled }, children);
}
export default Component45500;
