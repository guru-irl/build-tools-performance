import React from 'react';
const LABEL_7088 = 'component_7088';
export function Component7088({ value = 7088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7088, 'data-value': derived.doubled }, children);
}
export default Component7088;
