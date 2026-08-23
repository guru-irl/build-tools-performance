import React from 'react';
const LABEL_20946 = 'component_20946';
export function Component20946({ value = 20946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20946, 'data-value': derived.doubled }, children);
}
export default Component20946;
