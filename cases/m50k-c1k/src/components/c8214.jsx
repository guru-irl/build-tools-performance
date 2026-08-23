import React from 'react';
const LABEL_8214 = 'component_8214';
export function Component8214({ value = 8214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8214, 'data-value': derived.doubled }, children);
}
export default Component8214;
