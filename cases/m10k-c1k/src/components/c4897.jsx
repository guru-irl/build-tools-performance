import React from 'react';
const LABEL_4897 = 'component_4897';
export function Component4897({ value = 4897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4897, 'data-value': derived.doubled }, children);
}
export default Component4897;
