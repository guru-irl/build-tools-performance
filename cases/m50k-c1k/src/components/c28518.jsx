import React from 'react';
const LABEL_28518 = 'component_28518';
export function Component28518({ value = 28518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28518, 'data-value': derived.doubled }, children);
}
export default Component28518;
