import React from 'react';
const LABEL_4953 = 'component_4953';
export function Component4953({ value = 4953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4953, 'data-value': derived.doubled }, children);
}
export default Component4953;
