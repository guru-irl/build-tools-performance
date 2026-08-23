import React from 'react';
const LABEL_31449 = 'component_31449';
export function Component31449({ value = 31449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31449, 'data-value': derived.doubled }, children);
}
export default Component31449;
