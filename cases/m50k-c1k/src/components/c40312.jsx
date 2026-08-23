import React from 'react';
const LABEL_40312 = 'component_40312';
export function Component40312({ value = 40312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40312, 'data-value': derived.doubled }, children);
}
export default Component40312;
