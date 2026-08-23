import React from 'react';
const LABEL_14834 = 'component_14834';
export function Component14834({ value = 14834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14834, 'data-value': derived.doubled }, children);
}
export default Component14834;
