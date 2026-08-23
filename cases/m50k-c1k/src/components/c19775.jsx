import React from 'react';
const LABEL_19775 = 'component_19775';
export function Component19775({ value = 19775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19775, 'data-value': derived.doubled }, children);
}
export default Component19775;
