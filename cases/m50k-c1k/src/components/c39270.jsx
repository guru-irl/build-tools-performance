import React from 'react';
const LABEL_39270 = 'component_39270';
export function Component39270({ value = 39270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39270, 'data-value': derived.doubled }, children);
}
export default Component39270;
