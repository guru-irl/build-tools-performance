import React from 'react';
const LABEL_11748 = 'component_11748';
export function Component11748({ value = 11748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11748, 'data-value': derived.doubled }, children);
}
export default Component11748;
