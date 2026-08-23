import React from 'react';
const LABEL_46470 = 'component_46470';
export function Component46470({ value = 46470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46470, 'data-value': derived.doubled }, children);
}
export default Component46470;
