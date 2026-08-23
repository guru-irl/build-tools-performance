import React from 'react';
const LABEL_41506 = 'component_41506';
export function Component41506({ value = 41506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41506, 'data-value': derived.doubled }, children);
}
export default Component41506;
