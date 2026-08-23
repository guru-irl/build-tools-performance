import React from 'react';
const LABEL_19007 = 'component_19007';
export function Component19007({ value = 19007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19007, 'data-value': derived.doubled }, children);
}
export default Component19007;
