import React from 'react';
const LABEL_7009 = 'component_7009';
export function Component7009({ value = 7009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7009, 'data-value': derived.doubled }, children);
}
export default Component7009;
