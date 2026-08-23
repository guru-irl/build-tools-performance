import React from 'react';
const LABEL_5514 = 'component_5514';
export function Component5514({ value = 5514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5514, 'data-value': derived.doubled }, children);
}
export default Component5514;
