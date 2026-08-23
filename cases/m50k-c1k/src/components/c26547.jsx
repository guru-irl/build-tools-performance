import React from 'react';
const LABEL_26547 = 'component_26547';
export function Component26547({ value = 26547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26547, 'data-value': derived.doubled }, children);
}
export default Component26547;
