import React from 'react';
const LABEL_37581 = 'component_37581';
export function Component37581({ value = 37581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37581, 'data-value': derived.doubled }, children);
}
export default Component37581;
