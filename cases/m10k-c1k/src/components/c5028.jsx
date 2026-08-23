import React from 'react';
const LABEL_5028 = 'component_5028';
export function Component5028({ value = 5028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5028, 'data-value': derived.doubled }, children);
}
export default Component5028;
