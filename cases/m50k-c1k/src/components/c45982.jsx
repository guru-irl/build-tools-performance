import React from 'react';
const LABEL_45982 = 'component_45982';
export function Component45982({ value = 45982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45982, 'data-value': derived.doubled }, children);
}
export default Component45982;
