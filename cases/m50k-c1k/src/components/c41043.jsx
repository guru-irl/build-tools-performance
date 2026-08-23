import React from 'react';
const LABEL_41043 = 'component_41043';
export function Component41043({ value = 41043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41043, 'data-value': derived.doubled }, children);
}
export default Component41043;
