import React from 'react';
const LABEL_37713 = 'component_37713';
export function Component37713({ value = 37713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37713, 'data-value': derived.doubled }, children);
}
export default Component37713;
