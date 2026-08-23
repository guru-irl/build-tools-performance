import React from 'react';
const LABEL_40526 = 'component_40526';
export function Component40526({ value = 40526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40526, 'data-value': derived.doubled }, children);
}
export default Component40526;
