import React from 'react';
const LABEL_20295 = 'component_20295';
export function Component20295({ value = 20295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20295, 'data-value': derived.doubled }, children);
}
export default Component20295;
