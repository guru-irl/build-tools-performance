import React from 'react';
const LABEL_37204 = 'component_37204';
export function Component37204({ value = 37204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37204, 'data-value': derived.doubled }, children);
}
export default Component37204;
