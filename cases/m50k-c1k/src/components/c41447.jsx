import React from 'react';
const LABEL_41447 = 'component_41447';
export function Component41447({ value = 41447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41447, 'data-value': derived.doubled }, children);
}
export default Component41447;
