import React from 'react';
const LABEL_37447 = 'component_37447';
export function Component37447({ value = 37447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37447, 'data-value': derived.doubled }, children);
}
export default Component37447;
