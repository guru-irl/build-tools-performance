import React from 'react';
const LABEL_40262 = 'component_40262';
export function Component40262({ value = 40262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40262, 'data-value': derived.doubled }, children);
}
export default Component40262;
