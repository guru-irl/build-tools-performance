import React from 'react';
const LABEL_4041 = 'component_4041';
export function Component4041({ value = 4041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4041, 'data-value': derived.doubled }, children);
}
export default Component4041;
