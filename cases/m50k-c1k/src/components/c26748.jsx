import React from 'react';
const LABEL_26748 = 'component_26748';
export function Component26748({ value = 26748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26748, 'data-value': derived.doubled }, children);
}
export default Component26748;
