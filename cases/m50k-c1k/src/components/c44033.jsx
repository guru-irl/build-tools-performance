import React from 'react';
const LABEL_44033 = 'component_44033';
export function Component44033({ value = 44033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44033, 'data-value': derived.doubled }, children);
}
export default Component44033;
