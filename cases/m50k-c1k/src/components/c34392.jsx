import React from 'react';
const LABEL_34392 = 'component_34392';
export function Component34392({ value = 34392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34392, 'data-value': derived.doubled }, children);
}
export default Component34392;
