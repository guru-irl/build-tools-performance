import React from 'react';
const LABEL_31806 = 'component_31806';
export function Component31806({ value = 31806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31806, 'data-value': derived.doubled }, children);
}
export default Component31806;
