import React from 'react';
const LABEL_44036 = 'component_44036';
export function Component44036({ value = 44036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44036, 'data-value': derived.doubled }, children);
}
export default Component44036;
