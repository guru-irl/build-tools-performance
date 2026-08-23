import React from 'react';
const LABEL_28001 = 'component_28001';
export function Component28001({ value = 28001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28001, 'data-value': derived.doubled }, children);
}
export default Component28001;
