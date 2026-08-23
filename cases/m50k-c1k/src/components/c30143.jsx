import React from 'react';
const LABEL_30143 = 'component_30143';
export function Component30143({ value = 30143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30143, 'data-value': derived.doubled }, children);
}
export default Component30143;
