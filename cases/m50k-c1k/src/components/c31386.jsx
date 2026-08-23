import React from 'react';
const LABEL_31386 = 'component_31386';
export function Component31386({ value = 31386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31386, 'data-value': derived.doubled }, children);
}
export default Component31386;
