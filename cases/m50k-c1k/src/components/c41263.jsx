import React from 'react';
const LABEL_41263 = 'component_41263';
export function Component41263({ value = 41263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41263, 'data-value': derived.doubled }, children);
}
export default Component41263;
