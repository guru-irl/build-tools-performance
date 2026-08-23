import React from 'react';
const LABEL_408 = 'component_408';
export function Component408({ value = 408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_408, 'data-value': derived.doubled }, children);
}
export default Component408;
