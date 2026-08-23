import React from 'react';
const LABEL_36295 = 'component_36295';
export function Component36295({ value = 36295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36295, 'data-value': derived.doubled }, children);
}
export default Component36295;
