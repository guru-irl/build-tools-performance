import React from 'react';
const LABEL_11049 = 'component_11049';
export function Component11049({ value = 11049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11049, 'data-value': derived.doubled }, children);
}
export default Component11049;
