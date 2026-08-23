import React from 'react';
const LABEL_37267 = 'component_37267';
export function Component37267({ value = 37267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37267, 'data-value': derived.doubled }, children);
}
export default Component37267;
