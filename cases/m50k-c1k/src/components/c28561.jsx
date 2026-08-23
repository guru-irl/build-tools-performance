import React from 'react';
const LABEL_28561 = 'component_28561';
export function Component28561({ value = 28561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28561, 'data-value': derived.doubled }, children);
}
export default Component28561;
