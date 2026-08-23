import React from 'react';
const LABEL_11540 = 'component_11540';
export function Component11540({ value = 11540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11540, 'data-value': derived.doubled }, children);
}
export default Component11540;
