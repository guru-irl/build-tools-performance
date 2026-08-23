import React from 'react';
const LABEL_14386 = 'component_14386';
export function Component14386({ value = 14386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14386, 'data-value': derived.doubled }, children);
}
export default Component14386;
