import React from 'react';
const LABEL_5934 = 'component_5934';
export function Component5934({ value = 5934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5934, 'data-value': derived.doubled }, children);
}
export default Component5934;
