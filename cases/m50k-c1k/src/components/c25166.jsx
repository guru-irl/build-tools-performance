import React from 'react';
const LABEL_25166 = 'component_25166';
export function Component25166({ value = 25166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25166, 'data-value': derived.doubled }, children);
}
export default Component25166;
