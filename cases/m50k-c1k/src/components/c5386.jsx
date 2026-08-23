import React from 'react';
const LABEL_5386 = 'component_5386';
export function Component5386({ value = 5386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5386, 'data-value': derived.doubled }, children);
}
export default Component5386;
