import React from 'react';
const LABEL_26537 = 'component_26537';
export function Component26537({ value = 26537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26537, 'data-value': derived.doubled }, children);
}
export default Component26537;
