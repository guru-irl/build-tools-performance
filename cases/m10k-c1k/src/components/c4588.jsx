import React from 'react';
const LABEL_4588 = 'component_4588';
export function Component4588({ value = 4588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4588, 'data-value': derived.doubled }, children);
}
export default Component4588;
