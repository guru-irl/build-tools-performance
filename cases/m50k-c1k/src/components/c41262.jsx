import React from 'react';
const LABEL_41262 = 'component_41262';
export function Component41262({ value = 41262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41262, 'data-value': derived.doubled }, children);
}
export default Component41262;
