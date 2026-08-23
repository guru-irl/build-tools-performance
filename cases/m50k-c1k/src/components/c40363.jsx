import React from 'react';
const LABEL_40363 = 'component_40363';
export function Component40363({ value = 40363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40363, 'data-value': derived.doubled }, children);
}
export default Component40363;
