import React from 'react';
const LABEL_22221 = 'component_22221';
export function Component22221({ value = 22221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22221, 'data-value': derived.doubled }, children);
}
export default Component22221;
