import React from 'react';
const LABEL_20072 = 'component_20072';
export function Component20072({ value = 20072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20072, 'data-value': derived.doubled }, children);
}
export default Component20072;
