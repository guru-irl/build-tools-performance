import React from 'react';
const LABEL_40023 = 'component_40023';
export function Component40023({ value = 40023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40023, 'data-value': derived.doubled }, children);
}
export default Component40023;
