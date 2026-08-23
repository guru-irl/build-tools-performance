import React from 'react';
const LABEL_41449 = 'component_41449';
export function Component41449({ value = 41449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41449, 'data-value': derived.doubled }, children);
}
export default Component41449;
