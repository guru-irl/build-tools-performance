import React from 'react';
const LABEL_40200 = 'component_40200';
export function Component40200({ value = 40200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40200, 'data-value': derived.doubled }, children);
}
export default Component40200;
