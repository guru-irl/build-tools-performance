import React from 'react';
const LABEL_9412 = 'component_9412';
export function Component9412({ value = 9412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9412, 'data-value': derived.doubled }, children);
}
export default Component9412;
