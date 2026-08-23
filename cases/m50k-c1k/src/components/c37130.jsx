import React from 'react';
const LABEL_37130 = 'component_37130';
export function Component37130({ value = 37130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37130, 'data-value': derived.doubled }, children);
}
export default Component37130;
