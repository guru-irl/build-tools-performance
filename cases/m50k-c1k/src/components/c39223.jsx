import React from 'react';
const LABEL_39223 = 'component_39223';
export function Component39223({ value = 39223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39223, 'data-value': derived.doubled }, children);
}
export default Component39223;
