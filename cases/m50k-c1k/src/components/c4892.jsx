import React from 'react';
const LABEL_4892 = 'component_4892';
export function Component4892({ value = 4892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4892, 'data-value': derived.doubled }, children);
}
export default Component4892;
