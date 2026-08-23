import React from 'react';
const LABEL_8806 = 'component_8806';
export function Component8806({ value = 8806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8806, 'data-value': derived.doubled }, children);
}
export default Component8806;
