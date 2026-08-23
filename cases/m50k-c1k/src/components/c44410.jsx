import React from 'react';
const LABEL_44410 = 'component_44410';
export function Component44410({ value = 44410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44410, 'data-value': derived.doubled }, children);
}
export default Component44410;
