import React from 'react';
const LABEL_41806 = 'component_41806';
export function Component41806({ value = 41806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41806, 'data-value': derived.doubled }, children);
}
export default Component41806;
