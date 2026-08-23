import React from 'react';
const LABEL_30317 = 'component_30317';
export function Component30317({ value = 30317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30317, 'data-value': derived.doubled }, children);
}
export default Component30317;
