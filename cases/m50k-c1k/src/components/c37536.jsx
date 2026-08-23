import React from 'react';
const LABEL_37536 = 'component_37536';
export function Component37536({ value = 37536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37536, 'data-value': derived.doubled }, children);
}
export default Component37536;
