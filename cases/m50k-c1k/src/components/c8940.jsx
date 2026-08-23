import React from 'react';
const LABEL_8940 = 'component_8940';
export function Component8940({ value = 8940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8940, 'data-value': derived.doubled }, children);
}
export default Component8940;
