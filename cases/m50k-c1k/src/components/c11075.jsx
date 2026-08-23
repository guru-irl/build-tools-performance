import React from 'react';
const LABEL_11075 = 'component_11075';
export function Component11075({ value = 11075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11075, 'data-value': derived.doubled }, children);
}
export default Component11075;
