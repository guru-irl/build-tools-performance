import React from 'react';
const LABEL_14107 = 'component_14107';
export function Component14107({ value = 14107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14107, 'data-value': derived.doubled }, children);
}
export default Component14107;
