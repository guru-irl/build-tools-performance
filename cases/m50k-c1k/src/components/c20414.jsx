import React from 'react';
const LABEL_20414 = 'component_20414';
export function Component20414({ value = 20414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20414, 'data-value': derived.doubled }, children);
}
export default Component20414;
