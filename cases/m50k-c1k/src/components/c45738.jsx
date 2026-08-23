import React from 'react';
const LABEL_45738 = 'component_45738';
export function Component45738({ value = 45738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45738, 'data-value': derived.doubled }, children);
}
export default Component45738;
