import React from 'react';
const LABEL_38082 = 'component_38082';
export function Component38082({ value = 38082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38082, 'data-value': derived.doubled }, children);
}
export default Component38082;
