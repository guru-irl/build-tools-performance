import React from 'react';
const LABEL_11472 = 'component_11472';
export function Component11472({ value = 11472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11472, 'data-value': derived.doubled }, children);
}
export default Component11472;
