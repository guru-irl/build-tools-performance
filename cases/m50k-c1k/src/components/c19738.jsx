import React from 'react';
const LABEL_19738 = 'component_19738';
export function Component19738({ value = 19738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19738, 'data-value': derived.doubled }, children);
}
export default Component19738;
