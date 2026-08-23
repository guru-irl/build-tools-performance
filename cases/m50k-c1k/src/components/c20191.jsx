import React from 'react';
const LABEL_20191 = 'component_20191';
export function Component20191({ value = 20191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20191, 'data-value': derived.doubled }, children);
}
export default Component20191;
