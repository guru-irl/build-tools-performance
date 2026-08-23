import React from 'react';
const LABEL_28302 = 'component_28302';
export function Component28302({ value = 28302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28302, 'data-value': derived.doubled }, children);
}
export default Component28302;
