import React from 'react';
const LABEL_14090 = 'component_14090';
export function Component14090({ value = 14090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14090, 'data-value': derived.doubled }, children);
}
export default Component14090;
