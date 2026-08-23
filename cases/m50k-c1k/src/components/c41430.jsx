import React from 'react';
const LABEL_41430 = 'component_41430';
export function Component41430({ value = 41430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41430, 'data-value': derived.doubled }, children);
}
export default Component41430;
