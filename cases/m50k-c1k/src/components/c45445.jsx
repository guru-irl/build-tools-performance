import React from 'react';
const LABEL_45445 = 'component_45445';
export function Component45445({ value = 45445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45445, 'data-value': derived.doubled }, children);
}
export default Component45445;
