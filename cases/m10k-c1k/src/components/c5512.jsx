import React from 'react';
const LABEL_5512 = 'component_5512';
export function Component5512({ value = 5512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5512, 'data-value': derived.doubled }, children);
}
export default Component5512;
