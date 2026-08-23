import React from 'react';
const LABEL_40403 = 'component_40403';
export function Component40403({ value = 40403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40403, 'data-value': derived.doubled }, children);
}
export default Component40403;
