import React from 'react';
const LABEL_4312 = 'component_4312';
export function Component4312({ value = 4312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4312, 'data-value': derived.doubled }, children);
}
export default Component4312;
