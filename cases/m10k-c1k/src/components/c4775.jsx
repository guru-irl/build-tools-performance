import React from 'react';
const LABEL_4775 = 'component_4775';
export function Component4775({ value = 4775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4775, 'data-value': derived.doubled }, children);
}
export default Component4775;
