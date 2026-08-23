import React from 'react';
const LABEL_28660 = 'component_28660';
export function Component28660({ value = 28660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28660, 'data-value': derived.doubled }, children);
}
export default Component28660;
