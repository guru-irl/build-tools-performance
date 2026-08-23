import React from 'react';
const LABEL_37723 = 'component_37723';
export function Component37723({ value = 37723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37723, 'data-value': derived.doubled }, children);
}
export default Component37723;
