import React from 'react';
const LABEL_24952 = 'component_24952';
export function Component24952({ value = 24952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24952, 'data-value': derived.doubled }, children);
}
export default Component24952;
