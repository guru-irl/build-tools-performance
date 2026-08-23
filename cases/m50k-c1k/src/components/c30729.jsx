import React from 'react';
const LABEL_30729 = 'component_30729';
export function Component30729({ value = 30729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30729, 'data-value': derived.doubled }, children);
}
export default Component30729;
