import React from 'react';
const LABEL_4864 = 'component_4864';
export function Component4864({ value = 4864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4864, 'data-value': derived.doubled }, children);
}
export default Component4864;
