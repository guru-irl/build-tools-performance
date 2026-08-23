import React from 'react';
const LABEL_14228 = 'component_14228';
export function Component14228({ value = 14228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14228, 'data-value': derived.doubled }, children);
}
export default Component14228;
