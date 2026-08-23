import React from 'react';
const LABEL_46190 = 'component_46190';
export function Component46190({ value = 46190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46190, 'data-value': derived.doubled }, children);
}
export default Component46190;
