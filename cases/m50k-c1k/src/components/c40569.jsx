import React from 'react';
const LABEL_40569 = 'component_40569';
export function Component40569({ value = 40569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40569, 'data-value': derived.doubled }, children);
}
export default Component40569;
