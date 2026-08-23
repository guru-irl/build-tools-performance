import React from 'react';
const LABEL_46458 = 'component_46458';
export function Component46458({ value = 46458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46458, 'data-value': derived.doubled }, children);
}
export default Component46458;
