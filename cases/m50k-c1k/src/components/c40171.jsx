import React from 'react';
const LABEL_40171 = 'component_40171';
export function Component40171({ value = 40171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40171, 'data-value': derived.doubled }, children);
}
export default Component40171;
