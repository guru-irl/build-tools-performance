import React from 'react';
const LABEL_5970 = 'component_5970';
export function Component5970({ value = 5970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5970, 'data-value': derived.doubled }, children);
}
export default Component5970;
