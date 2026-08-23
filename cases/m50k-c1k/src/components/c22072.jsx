import React from 'react';
const LABEL_22072 = 'component_22072';
export function Component22072({ value = 22072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22072, 'data-value': derived.doubled }, children);
}
export default Component22072;
