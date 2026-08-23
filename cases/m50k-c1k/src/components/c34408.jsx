import React from 'react';
const LABEL_34408 = 'component_34408';
export function Component34408({ value = 34408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34408, 'data-value': derived.doubled }, children);
}
export default Component34408;
