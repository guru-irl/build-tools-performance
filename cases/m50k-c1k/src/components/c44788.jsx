import React from 'react';
const LABEL_44788 = 'component_44788';
export function Component44788({ value = 44788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44788, 'data-value': derived.doubled }, children);
}
export default Component44788;
