import React from 'react';
const LABEL_5152 = 'component_5152';
export function Component5152({ value = 5152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5152, 'data-value': derived.doubled }, children);
}
export default Component5152;
