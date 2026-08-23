import React from 'react';
const LABEL_11088 = 'component_11088';
export function Component11088({ value = 11088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11088, 'data-value': derived.doubled }, children);
}
export default Component11088;
