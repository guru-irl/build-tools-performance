import React from 'react';
const LABEL_40090 = 'component_40090';
export function Component40090({ value = 40090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40090, 'data-value': derived.doubled }, children);
}
export default Component40090;
