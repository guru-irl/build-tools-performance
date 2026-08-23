import React from 'react';
const LABEL_37325 = 'component_37325';
export function Component37325({ value = 37325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37325, 'data-value': derived.doubled }, children);
}
export default Component37325;
