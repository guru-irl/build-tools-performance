import React from 'react';
const LABEL_39412 = 'component_39412';
export function Component39412({ value = 39412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39412, 'data-value': derived.doubled }, children);
}
export default Component39412;
