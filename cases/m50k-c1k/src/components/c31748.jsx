import React from 'react';
const LABEL_31748 = 'component_31748';
export function Component31748({ value = 31748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31748, 'data-value': derived.doubled }, children);
}
export default Component31748;
