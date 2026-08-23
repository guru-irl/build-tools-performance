import React from 'react';
const LABEL_46088 = 'component_46088';
export function Component46088({ value = 46088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46088, 'data-value': derived.doubled }, children);
}
export default Component46088;
