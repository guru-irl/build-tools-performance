import React from 'react';
const LABEL_5188 = 'component_5188';
export function Component5188({ value = 5188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5188, 'data-value': derived.doubled }, children);
}
export default Component5188;
