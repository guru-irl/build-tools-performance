import React from 'react';
const LABEL_37514 = 'component_37514';
export function Component37514({ value = 37514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37514, 'data-value': derived.doubled }, children);
}
export default Component37514;
