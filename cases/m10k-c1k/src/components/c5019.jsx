import React from 'react';
const LABEL_5019 = 'component_5019';
export function Component5019({ value = 5019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5019, 'data-value': derived.doubled }, children);
}
export default Component5019;
