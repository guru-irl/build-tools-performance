import React from 'react';
const LABEL_19168 = 'component_19168';
export function Component19168({ value = 19168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19168, 'data-value': derived.doubled }, children);
}
export default Component19168;
