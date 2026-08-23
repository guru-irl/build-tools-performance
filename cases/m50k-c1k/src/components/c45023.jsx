import React from 'react';
const LABEL_45023 = 'component_45023';
export function Component45023({ value = 45023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45023, 'data-value': derived.doubled }, children);
}
export default Component45023;
