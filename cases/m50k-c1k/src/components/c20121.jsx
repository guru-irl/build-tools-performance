import React from 'react';
const LABEL_20121 = 'component_20121';
export function Component20121({ value = 20121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20121, 'data-value': derived.doubled }, children);
}
export default Component20121;
