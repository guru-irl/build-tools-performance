import React from 'react';
const LABEL_14320 = 'component_14320';
export function Component14320({ value = 14320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14320, 'data-value': derived.doubled }, children);
}
export default Component14320;
