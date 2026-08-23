import React from 'react';
const LABEL_14892 = 'component_14892';
export function Component14892({ value = 14892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14892, 'data-value': derived.doubled }, children);
}
export default Component14892;
