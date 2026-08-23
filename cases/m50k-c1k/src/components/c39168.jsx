import React from 'react';
const LABEL_39168 = 'component_39168';
export function Component39168({ value = 39168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39168, 'data-value': derived.doubled }, children);
}
export default Component39168;
