import React from 'react';
const LABEL_14737 = 'component_14737';
export function Component14737({ value = 14737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14737, 'data-value': derived.doubled }, children);
}
export default Component14737;
