import React from 'react';
const LABEL_3996 = 'component_3996';
export function Component3996({ value = 3996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3996, 'data-value': derived.doubled }, children);
}
export default Component3996;
