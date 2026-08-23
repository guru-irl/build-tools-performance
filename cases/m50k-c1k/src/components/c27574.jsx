import React from 'react';
const LABEL_27574 = 'component_27574';
export function Component27574({ value = 27574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27574, 'data-value': derived.doubled }, children);
}
export default Component27574;
