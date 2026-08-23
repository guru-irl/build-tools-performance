import React from 'react';
const LABEL_4994 = 'component_4994';
export function Component4994({ value = 4994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4994, 'data-value': derived.doubled }, children);
}
export default Component4994;
