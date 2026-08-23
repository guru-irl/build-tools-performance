import React from 'react';
const LABEL_20934 = 'component_20934';
export function Component20934({ value = 20934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20934, 'data-value': derived.doubled }, children);
}
export default Component20934;
