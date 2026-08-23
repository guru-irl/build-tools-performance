import React from 'react';
const LABEL_14923 = 'component_14923';
export function Component14923({ value = 14923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14923, 'data-value': derived.doubled }, children);
}
export default Component14923;
