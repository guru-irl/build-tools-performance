import React from 'react';
const LABEL_3183 = 'component_3183';
export function Component3183({ value = 3183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3183, 'data-value': derived.doubled }, children);
}
export default Component3183;
