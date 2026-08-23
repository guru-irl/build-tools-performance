import React from 'react';
const LABEL_5036 = 'component_5036';
export function Component5036({ value = 5036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5036, 'data-value': derived.doubled }, children);
}
export default Component5036;
