import React from 'react';
const LABEL_19403 = 'component_19403';
export function Component19403({ value = 19403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19403, 'data-value': derived.doubled }, children);
}
export default Component19403;
