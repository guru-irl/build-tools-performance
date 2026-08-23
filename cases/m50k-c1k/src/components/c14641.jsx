import React from 'react';
const LABEL_14641 = 'component_14641';
export function Component14641({ value = 14641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14641, 'data-value': derived.doubled }, children);
}
export default Component14641;
