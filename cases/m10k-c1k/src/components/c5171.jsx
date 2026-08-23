import React from 'react';
const LABEL_5171 = 'component_5171';
export function Component5171({ value = 5171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5171, 'data-value': derived.doubled }, children);
}
export default Component5171;
