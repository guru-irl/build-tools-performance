import React from 'react';
const LABEL_20740 = 'component_20740';
export function Component20740({ value = 20740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20740, 'data-value': derived.doubled }, children);
}
export default Component20740;
