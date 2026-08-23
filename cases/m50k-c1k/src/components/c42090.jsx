import React from 'react';
const LABEL_42090 = 'component_42090';
export function Component42090({ value = 42090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42090, 'data-value': derived.doubled }, children);
}
export default Component42090;
