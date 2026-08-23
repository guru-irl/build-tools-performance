import React from 'react';
const LABEL_19158 = 'component_19158';
export function Component19158({ value = 19158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19158, 'data-value': derived.doubled }, children);
}
export default Component19158;
