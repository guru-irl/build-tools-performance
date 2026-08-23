import React from 'react';
const LABEL_19961 = 'component_19961';
export function Component19961({ value = 19961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19961, 'data-value': derived.doubled }, children);
}
export default Component19961;
