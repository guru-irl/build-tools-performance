import React from 'react';
const LABEL_14287 = 'component_14287';
export function Component14287({ value = 14287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14287, 'data-value': derived.doubled }, children);
}
export default Component14287;
