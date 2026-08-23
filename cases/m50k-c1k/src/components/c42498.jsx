import React from 'react';
const LABEL_42498 = 'component_42498';
export function Component42498({ value = 42498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42498, 'data-value': derived.doubled }, children);
}
export default Component42498;
