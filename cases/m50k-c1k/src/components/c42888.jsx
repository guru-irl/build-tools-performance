import React from 'react';
const LABEL_42888 = 'component_42888';
export function Component42888({ value = 42888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42888, 'data-value': derived.doubled }, children);
}
export default Component42888;
