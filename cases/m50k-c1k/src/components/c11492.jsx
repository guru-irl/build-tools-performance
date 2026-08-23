import React from 'react';
const LABEL_11492 = 'component_11492';
export function Component11492({ value = 11492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11492, 'data-value': derived.doubled }, children);
}
export default Component11492;
