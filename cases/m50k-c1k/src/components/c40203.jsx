import React from 'react';
const LABEL_40203 = 'component_40203';
export function Component40203({ value = 40203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40203, 'data-value': derived.doubled }, children);
}
export default Component40203;
