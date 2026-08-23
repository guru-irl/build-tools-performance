import React from 'react';
const LABEL_37537 = 'component_37537';
export function Component37537({ value = 37537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37537, 'data-value': derived.doubled }, children);
}
export default Component37537;
