import React from 'react';
const LABEL_5408 = 'component_5408';
export function Component5408({ value = 5408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5408, 'data-value': derived.doubled }, children);
}
export default Component5408;
