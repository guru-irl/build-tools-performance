import React from 'react';
const LABEL_25618 = 'component_25618';
export function Component25618({ value = 25618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25618, 'data-value': derived.doubled }, children);
}
export default Component25618;
