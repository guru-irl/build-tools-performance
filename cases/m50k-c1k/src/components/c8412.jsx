import React from 'react';
const LABEL_8412 = 'component_8412';
export function Component8412({ value = 8412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8412, 'data-value': derived.doubled }, children);
}
export default Component8412;
