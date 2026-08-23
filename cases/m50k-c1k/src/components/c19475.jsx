import React from 'react';
const LABEL_19475 = 'component_19475';
export function Component19475({ value = 19475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19475, 'data-value': derived.doubled }, children);
}
export default Component19475;
