import React from 'react';
const LABEL_19825 = 'component_19825';
export function Component19825({ value = 19825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19825, 'data-value': derived.doubled }, children);
}
export default Component19825;
