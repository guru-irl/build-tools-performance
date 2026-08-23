import React from 'react';
const LABEL_41238 = 'component_41238';
export function Component41238({ value = 41238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41238, 'data-value': derived.doubled }, children);
}
export default Component41238;
