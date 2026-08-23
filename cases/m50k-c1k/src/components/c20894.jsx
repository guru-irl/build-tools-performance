import React from 'react';
const LABEL_20894 = 'component_20894';
export function Component20894({ value = 20894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20894, 'data-value': derived.doubled }, children);
}
export default Component20894;
