import React from 'react';
const LABEL_42514 = 'component_42514';
export function Component42514({ value = 42514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42514, 'data-value': derived.doubled }, children);
}
export default Component42514;
