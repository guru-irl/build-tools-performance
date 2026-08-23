import React from 'react';
const LABEL_41961 = 'component_41961';
export function Component41961({ value = 41961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41961, 'data-value': derived.doubled }, children);
}
export default Component41961;
