import React from 'react';
const LABEL_25793 = 'component_25793';
export function Component25793({ value = 25793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25793, 'data-value': derived.doubled }, children);
}
export default Component25793;
