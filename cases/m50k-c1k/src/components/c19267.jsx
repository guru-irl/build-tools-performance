import React from 'react';
const LABEL_19267 = 'component_19267';
export function Component19267({ value = 19267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19267, 'data-value': derived.doubled }, children);
}
export default Component19267;
