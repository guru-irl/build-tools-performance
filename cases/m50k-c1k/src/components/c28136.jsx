import React from 'react';
const LABEL_28136 = 'component_28136';
export function Component28136({ value = 28136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28136, 'data-value': derived.doubled }, children);
}
export default Component28136;
