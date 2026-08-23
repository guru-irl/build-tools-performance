import React from 'react';
const LABEL_23349 = 'component_23349';
export function Component23349({ value = 23349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23349, 'data-value': derived.doubled }, children);
}
export default Component23349;
