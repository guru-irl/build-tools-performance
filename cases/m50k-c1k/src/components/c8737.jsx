import React from 'react';
const LABEL_8737 = 'component_8737';
export function Component8737({ value = 8737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8737, 'data-value': derived.doubled }, children);
}
export default Component8737;
