import React from 'react';
const LABEL_40540 = 'component_40540';
export function Component40540({ value = 40540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40540, 'data-value': derived.doubled }, children);
}
export default Component40540;
