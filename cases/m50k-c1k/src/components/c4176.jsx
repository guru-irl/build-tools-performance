import React from 'react';
const LABEL_4176 = 'component_4176';
export function Component4176({ value = 4176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4176, 'data-value': derived.doubled }, children);
}
export default Component4176;
